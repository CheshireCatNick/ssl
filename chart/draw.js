'use strict';

const datasetNum = 3;
const color = ['#27ae60', '#e67e22', '#3498db', '#8e44ad', '#e74c3c', '#f1c40f', '#34495e'];
const data = [];

const basicChartData = `
{
  "type": "line",
  "data": {
    "datasets": []
  },
  "options": {
    "scales": {
      "xAxes": [{
        "type": "linear",
        "position": "bottom"
      }]
    },
    "title": {
      "display": true,
      "fontSize": 40,
      "text": ""
    },
    "elements": { "point": { "radius": 0 } }
  }
}
`;
function makeChartData(title, dataArray) {
  let chartData = JSON.parse(basicChartData);
  chartData.options.title.text = title;
  for (let i = 0; i < dataArray.length; i++) {
    let data = [];
    let x = 0;
    for (let y of dataArray[i]) {
      data.push({ "x": x, "y": y });
      x += 1;
    }
    let dataset = {
      "label": i + 1,
      "data": data,
      "borderColor": color[0],
      "backgroundColor": color[0],
      "fill": false,
      "lineTension": 0
    }
    chartData.data.datasets.push(dataset);
  }
  return chartData;
}

function createCanvas() {
  for (let i = 1; i <= 4; i++)
    document.getElementById(`d${i}`).innerHTML 
        = `<canvas id="c${i}"></canvas>`;
}

const angles = ['0d', '90d', '180d', '270d'];
function draw(fix, option) {
  createCanvas();
  if (fix === 'channel') {
    let channel;
    switch (option) {
      case 'ch1':
        channel = 0;
        break;
      case 'ch2':
        channel = 1;
        break;
      case 'ch3':
        channel = 2;
        break;
      case 'ch4':
        channel = 3;
        break;
    }
    // data[0] is degree 0 of every test
    let data = [];
    for (let i in angles) data.push([]);

    for (let i in angles) 
      for (let test of freqData[angles[i]]) 
        data[i].push(test[channel]);
    
    let freqChart1 = new Chart('c1', makeChartData('0 deg', data[0]));
    let freqChart2 = new Chart('c2', makeChartData('90 deg', data[1]));
    let freqChart3 = new Chart('c3', makeChartData('180 deg', data[2]));
    let freqChart4 = new Chart('c4', makeChartData('270 deg', data[3]));
  }
  if (fix === 'angle') {
    const angle = option;
    // data[0] is channel 1 of every test
    let data = [];
    
    for (let channel = 0; channel < 4; channel++)
      data.push([]);
    for (let testCase of freqData[angle]) {
      for (let channel = 0; channel < 4; channel++)
        data[channel].push(testCase[channel]);
    }
    let freqChart1 = new Chart('c1', makeChartData('channel 1', data[0]));
    let freqChart2 = new Chart('c2', makeChartData('channel 2', data[1]));
    let freqChart3 = new Chart('c3', makeChartData('channel 3', data[2]));
    let freqChart4 = new Chart('c4', makeChartData('channel 4', data[3]));
  }
}
