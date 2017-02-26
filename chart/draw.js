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
    }
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
      "borderColor": color[i],
      "backgroundColor": color[i],
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

// draw
function draw(fix, option) {
  createCanvas();
  /*
  if (fix === 'channel') {
    const angle = ['0d', '90d', '180d', '270d'];
    const channel = option;
    let data = [];
    for (let test in freqData[channel]) {
      console.log(test);
    }
    let freqChart1 = new Chart('c1', makeChartData('0 deg', freqData['0d'][channel]));
    let freqChart2 = new Chart('c2', makeChartData('90 deg', freqData['90d'][channel]));
    let freqChart3 = new Chart('c3', makeChartData('180 deg', freqData['180d'][channel]));
    let freqChart4 = new Chart('c4', makeChartData('270 deg', freqData['270d'][channel]));
  }*/
  if (fix === 'angle') {
    const angle = option;
    // data[0] is channel 1
    let data = [];
    
    for (let channel = 0; channel < 4; channel++)
      data.push([]);
    for (let testCase of freqData[angle]) {
      for (let channel = 0; channel < 4; channel++)
        data[channel].push(testCase[channel]);
    }
    console.log(data[0]);

    let freqChart1 = new Chart('c1', makeChartData('channel 1', data[0]));
    let freqChart2 = new Chart('c2', makeChartData('channel 2', data[1]));
    let freqChart3 = new Chart('c3', makeChartData('channel 3', data[2]));
    let freqChart4 = new Chart('c4', makeChartData('channel 4', data[3]));
  }
}
