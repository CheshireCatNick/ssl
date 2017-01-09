#include "./fft/kiss_fftr.h"
#include <stdio.h>

int maxBufferNum = 10;
int channelNum = 4;
int sampleNum = 4096;
float** buffer;

void initBuffer() {
  for (int channelIndex = 0; channelIndex < 4; channelIndex++)
    for (int i = 0; i < sampleNum * maxBufferNum; i++)
      buffer[channelIndex][i] = 0;
}

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

float** chop(float* buf, int bufSize, int frameSize,
             int overlapSize, int& frameNum, int zpSize) {
  int unOverLapSize = frameSize - overlapSize;
  // prevent overflow
  bufSize -= overlapSize;
  frameNum = bufSize / unOverLapSize;
  float** bufArray = NULL;

  bufArray = new float*[frameNum];
  for (int i = 0; i < frameNum; i++) {
    bufArray[i] = new float[frameSize + zpSize];
    for (int j = 0; j < frameSize; j++)
      bufArray[i][j] = buf[i * unOverLapSize + j];
    for (int j = frameSize; j < frameSize + zpSize; j++)
      bufArray[i][j] = 0;
  }
  return bufArray;
}

void getFreq(float* buffer) {
  int speedUpFactor = 1;
  int MAXFREQ = 48000 / speedUpFactor;
  int findMINFREQ = 10000 / speedUpFactor;
  int findMAXFREQ = 14000 / speedUpFactor;
  kiss_fft_scalar input[MAXFREQ];
  kiss_fft_cpx output[MAXFREQ];

  float strength[MAXFREQ];
  // define frame info
  int frameSize = 1024;
  int overlapSize = 800;
  int zpSize = MAXFREQ - frameSize;
  int frameNum;
  // chop the buffer
  float** bufArray = chop(buffer, sampleNum * maxBufferNum, frameSize,
                          overlapSize, frameNum, zpSize);

  for (int frame = 0; frame < frameNum; frame++)
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
    fft(input, output, MAXFREQ);
    for (int f = findMINFREQ; f < findMAXFREQ; f++)
      strength[f] = 0;
    // calculate strength of each frequency
    for (int f = findMINFREQ; f < findMAXFREQ; f++)
      strength[f] += sqrt(output[f].i * output[f].i
                      + output[f].r * output[f].r);
    // find the frequency with max strength
    int fWithMaxStrength = 0;
    double maxStrength = 0;
    for (int f = findMINFREQ; f <= findMAXFREQ; f++)
      if (strength[f] > maxStrength)
      {
        maxStrength = strength[f];
        fWithMaxStrength = f;
      }
    //if (maxStrength < 900000)
    //  return;
    int trueF = fWithMaxStrength * speedUpFactor - 12000;
    float tolerance = 40.0;
    if (trueF >= -tolerance && trueF <= tolerance)
      printf("%d,", trueF);
  }
}

void readData(char* fileName) {
  // read data into buffer
  puts(fileName);
  FILE* fp = fopen(fileName, "r");
  for (int i = 0; i < 4; i++)
    for (int j = 0; j < 4; j++)
      fscanf(fp, "%f", &buffer[i][j]);
}
int main(void) {
  buffer = new float*[channelNum];
  for (int i = 0; i < channelNum; i++)
    buffer[i] = new float[sampleNum];

  char fileName[] = "./data/270d-0.dat";
  readData(fileName);
  for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++)
      printf("%f ", buffer[i][j]);
    puts("");
  }
  /*
  // fft process buffer
  for (int channelIndex = 0; channelIndex < channelNum; channelIndex++) {
    for (int i = 0; i < sampleNum * bufferNum; i++)
      printf("%f, ", buffer[channelIndex][i]);
    //getFreq(buffer[channelIndex]);
  }
  */
}

