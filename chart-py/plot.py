import matplotlib.pyplot as plt

def makeMarkers():
  colors = ['b', 'g', 'r', 'c', 'm', 'y', 'k']
  types = ['+', 'o', '^', 'v', '<', '>', 'D', 'h', 's']
  markers = []
  for i in range(groupNum):
    marker = random.choice(colors) + random.choice(types)
    markers.append(marker)
  return markers

def plot():
  '''
  plotAns = False
  print('plotting...')
  # reduce dimension to 2
  pca = PCA(n_components=2)
  data = []
  for title in titles:
    data.append(title.feature)
  data = pca.fit_transform(numpy.array(data))
  # seperate 2 dim data into group
  clusteredData = []
  for i in range(groupNum):
    clusteredData.append([])
  for i in range(len(titles)):
    if (plotAns):
      clusteredData[titles[i].ans].append(data[i])
    else:
      clusteredData[titles[i].group].append(data[i])  
  # plot
  #markers = makeMarkers()
  for i in range(groupNum):
  '''
  x = [1, 2, 3]
  y = [1, 2, 3]
  plt.plot(x, y, 'bo');
  plt.show()

def main():
  plot()



if __name__ == '__main__':
  main()