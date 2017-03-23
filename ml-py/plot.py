import matplotlib.pyplot as plt
import ast

def makeMarkers():
  colors = ['b', 'g', 'r', 'c', 'm', 'y', 'k']
  types = ['+', 'o', '^', 'v', '<', '>', 'D', 'h', 's']
  markers = []
  for i in range(groupNum):
    marker = random.choice(colors) + random.choice(types)
    markers.append(marker)
  return markers

def plot():
  x = [1, 2, 3]
  y = [1, 2, 3]
  plt.plot(x, y, 'bo');
  plt.show()

def readFile():
  f = open('../data/freq/270.js')
  lineNum = 0
  for line in f:
    if (lineNum == 0 or lineNum == 1001 or lineNum == 1002):
      lineNum += 1
      continue
    a = ast.literal_eval(line)
    print a[0][0]
    lineNum += 1

def main():
  readFile()
  plot()



if __name__ == '__main__':
  main()