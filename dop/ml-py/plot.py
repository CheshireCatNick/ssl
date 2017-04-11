import matplotlib.pyplot as plt
import ast

trainData = {}
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
  for fileName in fileNames:
    splt = plt.subplot(311 + subplotNum)
    average = [0] * 400
    lineNum = 0
    for d in trainData[fileName]:
      print subplotNum
      '''
      if subplotNum == 0 and lineNum >= 100: continue
      if subplotNum == 1 and lineNum <= 900: 
        lineNum += 1
        continue
      '''
      plt.plot(range(len(d)), d, 'b-')
      for i in range(len(d)):
        average[i] += d[i]
      lineNum += 1
    average = [i / 1000 for i in average]
    splt.plot(range(len(average)), average, 'r-')
    splt.plot(range(len(average)), [0] * 400, color='black', linewidth=2)
    splt.set_title(fileName)
    subplotNum += 1
  '''
  average = [0] * 400
  splt = plt.subplot(212)
  for d in trainData['270.js']:
    plt.plot(range(len(d)), d, 'b-')
    for i in range(len(d)):
      average[i] += d[i]
  average = [i / 1000 for i in average]
  splt.plot(range(len(average)), average, 'r-')
  splt.set_title('270')
  '''
  plt.show()

def readFile():
  m = 1000
  for fileName in fileNames:
    trainData[fileName] = []
    f = open('../data/freq/' + fileName + '.js')
    lineNum = 0
    for line in f:
      #if (lineNum == 50):
      #  break;
      if (lineNum == 0 or lineNum == 1001 or lineNum == 1002):
        lineNum += 1
        continue
      a = ast.literal_eval(line)[0]
      trainData[fileName].append(a[0][start:end] + a[1][start:end]
       + a[2][start:end] + a[3][start:end])
      #print len(a[0])
      if len(a[0]) < m:
        m = len(a[1]) 
      lineNum += 1
    print 'm =', m

def main():
  readFile()
  plot()



if __name__ == '__main__':
  main()
