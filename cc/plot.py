import matplotlib.pyplot as plt
import ast
import math

trainData = []
fileNames = ['90', '90B', '270']

#trainData = []
channelNum = 4
start = 0
end = 100

def makeMarkers():
  colors = ['b', 'g', 'r', 'c', 'm', 'y', 'k']
  types = ['+', 'o', '^', 'v', '<', '>', 'D', 'h', 's']
  markers = []
  for i in range(groupNum):
    marker = random.choice(colors) + random.choice(types)
    markers.append(marker)
  return markers

subplotNum = 0

def plot(data):
  global subplotNum
  splt = plt.subplot(711 + subplotNum)
  plt.plot(range(len(data)), data, 'b-')
  #splt.set_title(fileName)
  subplotNum += 1

def readFile():
  m = 1000
  fileName = 'outdoor/90-1.txt'
  f = open('./data/signal/' + fileName)
  channelNum = 0
  for line in f:
    trainData.append([])
    signals = line.split(' ')
    for s in signals[:-1]:
      trainData[channelNum].append(float(s))
    channelNum += 1

def sobel(data):
  sobl = []
  for i in range(len(data)):
    if i == 0 or i == len(data) - 1: continue
    sobl.append(data[i + 1] - data[i - 1])
  return sobl

def main():
  highFreq = []
  for i in range(100):
    highFreq.append(math.sin(i * 5))
  plot(highFreq)

  lowFreq = []
  for i in range(100):
    lowFreq.append(math.sin(i / 10.0))
  plot(lowFreq)
  
  comb = []
  for i in range(100):
    comb.append(highFreq[i] + lowFreq[i])
  plot(comb)

  plot(sobel(comb))

  amp = []
  for i in range(100):
    amp.append(abs(lowFreq[i]))
  plot(amp)

  for i in range(100):
    highFreq[i] *= amp[i]
  plot(highFreq)

  final = []
  for i in range(100):
    final.append(highFreq[i] + lowFreq[i])
  plot(sobel(final))

  plt.show()


if __name__ == '__main__':
  main()
