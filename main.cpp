#include "./fft/kiss_fftr.h"
#include <stdio.h>

#define MAXLINE 2000000
#define MAXFRAMENUM 200

int maxBufferNum = 10;
int channelNum = 4;
int sampleNum = 4096;
float** buffer;
int bufferSize[4];

bool printFreq = true;
bool printPredict = false;

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

void getFreq(float* buffer, int bufferSize, float* freqs) {
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
  float** bufArray = chop(buffer, bufferSize, frameSize,
                          overlapSize, frameNum, zpSize);
  int result[frameNum];
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
    int tolerance = 40;
    if (trueF < -tolerance) trueF = -tolerance;
    else if (trueF > tolerance) trueF = tolerance;

    freqs[frame] = trueF;  
    if (printFreq) printf("%d,", trueF);
  }
}

void readData(FILE* fp) {
  // read data into buffer
  char line[channelNum][MAXLINE];
  int j = 0;
  char* token;
  for (int i = 0; i < channelNum; i++) {
    fgets(line[i], MAXLINE, fp);
    j = 0;
    token = strtok(line[i], " ");
    while (token != NULL) {
      //printf("%s\n", token);
      buffer[i][j] = atof(token);
      token = strtok(NULL, " ");
      j++;
    }
    bufferSize[i] = j;
  }
  /*
  for (int i = 0; i < 4; i++)
    for (int j = 0; j < sampleNum * maxBufferNum; j++)
      fscanf(fp, "%f", &buffer[i][j]);
  */
}
int main(void) {
  buffer = new float*[channelNum];
  for (int i = 0; i < channelNum; i++)
    buffer[i] = new float[sampleNum * maxBufferNum];

  char fileName[] = "./t.txt";
  FILE* fp = fopen(fileName, "r");
  int testNum = 200;
  float freqs[MAXFRAMENUM];
  while (testNum--) {
    readData(fp);
    /*
    for (int i = 0; i < channelNum; i++) {
      for (int j = 0; j < bufferSize[i]; j++)
        printf("%f ", buffer[i][j]);
      puts("");
    }*/
    
    // fft process buffer
    //puts("ffting");
    if (printFreq) putchar('[');
    for (int channelIndex = 0; channelIndex < channelNum; channelIndex++) {
      //printf("channel %d\n", channelIndex + 1);
      //for (int i = 0; i < sampleNum * bufferNum; i++)
      //  printf("%f, ", buffer[channelIndex][i]);
      if (printFreq) putchar('[');
      getFreq(buffer[channelIndex], bufferSize[channelIndex], freqs);
      if (printFreq) puts("],");
      if (printPredict && channelIndex == 0) {
        printf("test #%d\n", 6 - testNum);
        // judge result
        int sum = 0;
        for (int i = 40; i < 80; i++)
          sum += freqs[i];
        printf("sum = %d\n", sum);
        if (sum > -300) puts("Predict: Facing sound source");
        else if (sum <= -300 && sum >= -350) puts("Predict: Nah");
        else puts("Predict: Back to sound source");
      }
    }
    if (printFreq) puts("],");
  }
}

