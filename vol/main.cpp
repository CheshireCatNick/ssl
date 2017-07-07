#include "../fft/kiss_fftr.h"
#include <stdio.h>
#include <utility>

#define MAXLINE 7000000
#define MAXFRAMENUM 200
#define MAXFILENAME 200

int testNum = 1;

int m_channelNum_ = 4;
int sampleNum = 4096;
float** m_signal;
int bufferSize[4];

int m_recordBufferNum_ = 7;
int m_bufferSize_ = 4096 * m_recordBufferNum_;
int m_targetFrequency_ = 12000;
int m_maxVolumeFrameNum_ = 200;
int** m_volume_;
int m_volumeFrameNum_;

bool printFreq = false;
bool printPredict = false;

FILE* inputFP;
FILE* outputFP;

void fft(const kiss_fft_scalar* input, kiss_fft_cpx* output, int MAXFREQ) {
  kiss_fftr_cfg cfg;
  // 0 means inverse fft
  if ((cfg = kiss_fftr_alloc(MAXFREQ, 0, NULL, NULL)) != NULL)
  {
    kiss_fftr(cfg, input, output);
    free(cfg);
  }
  else
  {
    printf("Not enough memory for computation\n");
  }
}

void readData(FILE* fp) {
  // read data into buffer
  char line[MAXLINE];
  int j = 0;
  char* token;
  for (int i = 0; i < m_channelNum_; i++) {
    fgets(line, MAXLINE, fp);
    j = 0;
    token = strtok(line, " ");
    while (token != NULL) {
      m_signal[i][j] = atof(token);
      //puts(token);
      token = strtok(NULL, " ");
      j++;
    }
    bufferSize[i] = j;
    printf("channel %d buffer size %d\n", i + 1, j);
  }
}
float** chop(int channelIndex, int frameSize,
              int overlapSize, int zpSize)
{
  int unOverLapSize = frameSize - overlapSize;
  // prevent overflow
  m_volumeFrameNum_ = (m_bufferSize_ - overlapSize) / unOverLapSize;
  float** bufArray = NULL;
  bufArray = new float*[m_volumeFrameNum_];
  for (int i = 0; i < m_volumeFrameNum_; i++)
  {
    bufArray[i] = new float[frameSize + zpSize];
    for (int j = 0; j < frameSize; j++)
      bufArray[i][j] = m_signal[channelIndex][i * unOverLapSize + j];
    for (int j = frameSize; j < frameSize + zpSize; j++)
      bufArray[i][j] = 0;
  }
  return bufArray;
}

void calcVolume(int channelIndex)
{
  int speedUpFactor = 1;
  int MAXFREQ = 48000 / speedUpFactor;
  //  int findMINFREQ = 10000 / speedUpFactor;
  //  int findMAXFREQ = 14000 / speedUpFactor;
  kiss_fft_scalar input[MAXFREQ];
  kiss_fft_cpx output[MAXFREQ];

  // define frame info
  int frameSize = 2048;
  int overlapSize = 80;
  int zpSize = MAXFREQ - frameSize;
  // chop the buffer
  float** bufArray = chop(channelIndex, frameSize, overlapSize, zpSize);
  printf("channel = %d, frameNum = %d\n", channelIndex, m_volumeFrameNum_);
  for (int frame = 0; frame < m_volumeFrameNum_; frame++)
  {
    // fft initialize
    for(int f = 0; f < MAXFREQ; f++)
    {
      input[f] = 0.0f ;
      output[f].r = 0.0f;
      output[f].i = 0.0f;
    }
    // copy chopped buffer to fft input
    for(int i = 0 ; i < frameSize + zpSize; i++)
    {
      input[i] = bufArray[frame][i];
      //printf("%d: %f\n", i, input[i]);
    }
    free(bufArray[frame]);
    fft(input, output, MAXFREQ);
    //printf("max freq = %d\n",
//              findFrequencyWithMaxStrength(10, 1000, MAXFREQ, output));
    // calculate volume
    int interval = 25;
    m_volume_[channelIndex][frame] = 0;
    //printf("frame: %d\n", frame);
    for (int f = m_targetFrequency_ - interval; f <= m_targetFrequency_ + interval; f++)
      m_volume_[channelIndex][frame]
          += (int) (sqrt(output[f].i * output[f].i + output[f].r * output[f].r) / 100 + 0.5f);
    printf("%d\n", m_volume_[channelIndex][frame]);
    //printf("%d %f %d\n", fWithMaxStrength, strength[fWithMaxStrength], frameNum);
    //vols[frame] = maxStrength;
    //if (printFreq) fprintf(outputFP, "%f,", vols[frame]);
  }
}

float calcSD(int channelI, int voteFrameI, int voteFrameLen)
{
  float sum = 0;
  float ssum = 0;
  float v;
  for (int volI = 0; volI < voteFrameLen; volI++) {
    v = m_volume_[channelI][voteFrameI * voteFrameLen + volI];
    sum += v;
    ssum += v * v;
  }
  float avg = sum / voteFrameLen;
  return sqrt(ssum / voteFrameLen - avg * avg);
}
// wire is for sorting network
void wire(std::pair<int, int> &a, std::pair<int, int> &b)
{
  if (a.second < b.second)
  {
    std::pair<int, int> c = a;
    a = b;
    b = c;
  }
}

void predictByAxis(int voteFrameI, int voteFrameLen)
{
  int channelVolume[m_channelNum_];
  // calculate channel intensity
  for (int channelI = 0; channelI < m_channelNum_; channelI++)
    channelVolume[channelI] = 0;
  for (int volI = 0; volI < voteFrameLen; volI++)
    for (int channelI = 0; channelI < m_channelNum_; channelI++)
      channelVolume[channelI] += m_volume_[channelI][voteFrameI * voteFrameLen + volI];

  std::pair<int, int> axisVolume[m_channelNum_];
  axisVolume[0] = std::make_pair(1, channelVolume[3] + channelVolume[1]);
  axisVolume[1] = std::make_pair(2, channelVolume[2] + channelVolume[3]);
  axisVolume[2] = std::make_pair(3, channelVolume[2] + channelVolume[0]);
  axisVolume[3] = std::make_pair(4, channelVolume[0] + channelVolume[1]);
  // sort
  wire(axisVolume[0], axisVolume[2]);
  wire(axisVolume[1], axisVolume[3]);
  wire(axisVolume[0], axisVolume[1]);
  wire(axisVolume[2], axisVolume[3]);
  wire(axisVolume[1], axisVolume[2]);
  for (int i = 0; i < 4; i++)
    printf("ax = %d, int = %d\n", axisVolume[i].first, axisVolume[i].second);
  int maxAxis = axisVolume[0].first;
    //int secAxis = axisVolume[1].first;
    /* ratio and awk
    const maxL = labelData[3].l;
    const secL = labelData[2].l;
    const ratio = round(labelData[3].v / labelData[2].v);
    let a;
    let awk;
    //console.log(maxL, secL);

    if ((maxL + 1) % 4 !== secL % 4 && (maxL + 3) % 4 !== secL % 4){
      awk = true;
      if (ratio <= 1.1)
        a = labelData[1].l;
      else
        a = maxL;
    }
    else {
      awk = false;
      a = maxL;
    }
    return {
      axis: a,
      volDiff: labelData[3].v - labelData[0].v,
      ratio: ratio,
      awk: awk
    };*/
  //m_soundLocalizerData_->m_SSLPredict.direction = maxAxis;
  printf("%d\n", maxAxis);
  float maxSD = 0;
  float SDSum = 0;
  float sd;
  for (int channelI = 0; channelI < m_channelNum_; channelI++)
  {
    sd = calcSD(channelI, voteFrameI, voteFrameLen);
    printf("sd = %f\n", sd);
    maxSD = (sd > maxSD) ? sd : maxSD;
    SDSum += sd;
  }
  float avgSD = SDSum / 4;
  int volumeDiff = axisVolume[0].second - axisVolume[3].second;
  float confidence = volumeDiff / 100.0 / avgSD;
  //m_soundLocalizerData_->m_SSLPredict.confidence = confidence;
  printf("volumeDiff = %d\n", volumeDiff);
  printf("avgSD = %f\n", avgSD);
  printf("confidence = %f\n", confidence);
  return;
}

void calcDirection()
{
  int voteFrameNum = 1;
  int voteFrameLen = m_volumeFrameNum_ / voteFrameNum;
  for (int voteFrameI = 0; voteFrameI < voteFrameNum; voteFrameI++)
    predictByAxis(voteFrameI, voteFrameLen);
  return;
}

void localize()
{
  // calculate volume
  for (int i = 0; i < m_channelNum_; i++)
    calcVolume(i);
  // calculate direction
  calcDirection();
  return;
}

int main(int argv, char* args[]) {
  // init
  m_signal = new float*[m_channelNum_];
  for (int i = 0; i < m_channelNum_; i++)
    m_signal[i] = new float[m_bufferSize_];

  m_volume_ = new int*[m_channelNum_];
  for (int i = 0; i < m_channelNum_; i++)
    m_volume_[i] = new int[m_maxVolumeFrameNum_];
  // parse argv and open files
  char signalDataPath[] = "./";
  char freqDataPath[] = "./data/volume/";
  char inputFileName[MAXFILENAME];
  strcpy(inputFileName, signalDataPath);
  strcat(inputFileName, args[1]);
  inputFP = fopen(inputFileName, "r");
  char outputFileName[MAXFILENAME];
  strcpy(outputFileName, freqDataPath);
  strcat(outputFileName, args[1]);
  strcpy(outputFileName + strlen(outputFileName) - 4, ".js");
  outputFP = fopen(outputFileName, "w");

  fputs("const vols = \n", outputFP);
  while (testNum--) {
    //printf("%d\n", testNum);
    readData(inputFP);
    localize();
    /*
    if (printFreq) fputs("[", outputFP);
    for (int channelIndex = 0; channelIndex < channelNum; channelIndex++) {
      printf("ch%d\n", channelIndex + 1);
      if (printFreq) fputs("[", outputFP);
      //if (channelIndex == 0) 

      getVol(buffer[channelIndex], bufferSize[channelIndex], vols);
      if (printFreq) fputs("],", outputFP);
    }
    if (printFreq) fputs("];\n", outputFP);*/
  }
  fputs("module.exports = vols;\n", outputFP);
}

