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

// draw
let freqChart0 = new Chart('0d', makeChartData('0 deg', freq0));
let freqChart90 = new Chart('90d', makeChartData('90 deg', freq90));
let freqChart180 = new Chart('180d', makeChartData('180 deg', freq180));
let freqChart270 = new Chart('270d', makeChartData('270 deg', freq270));