'use strict';

const datasetNum = 5;
const color = ['#27ae60', '#e67e22', '#3498db', '#8e44ad', '#e74c3c'];
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
  for (let i = 0; i < datasetNum; i++) {
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
  if (fix === 'channel') {
    const channel = option;
    let freqChart1 = new Chart('c1', makeChartData('0 deg', freqData['0d'][channel]));
    let freqChart2 = new Chart('c2', makeChartData('90 deg', freqData['90d'][channel]));
    let freqChart3 = new Chart('c3', makeChartData('180 deg', freqData['180d'][channel]));
    let freqChart4 = new Chart('c4', makeChartData('270 deg', freqData['270d'][channel]));
  }
  else if (fix === 'angle') {
    const angle = option;
    let freqChart1 = new Chart('c1', makeChartData('channel 1', freqData[angle]['ch1']));
    let freqChart2 = new Chart('c2', makeChartData('channel 2', freqData[angle]['ch2']));
    let freqChart3 = new Chart('c3', makeChartData('channel 3', freqData[angle]['ch3']));
    let freqChart4 = new Chart('c4', makeChartData('channel 4', freqData[angle]['ch4']));
  }
}
