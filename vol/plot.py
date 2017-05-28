import matplotlib.pyplot as plt
import ast

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

def plot():
  subplotNum = 0
  data = trainData[0]
  splt = plt.subplot(111 + subplotNum)
  plt.plot(range(len(data)), data, 'b-')
  #splt.set_title(fileName)
  subplotNum += 1
  plt.show()

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

def main():
  readFile()
  plot()



if __name__ == '__main__':
  main()
