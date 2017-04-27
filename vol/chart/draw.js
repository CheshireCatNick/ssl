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
    "elements": { "point": { "radius": 0 } },
    "legend": { "display": true }
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
      "label": `channel ${i + 1}`,
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
function output(div, dataName) {
  const d = document.getElementById(div);
  d.innerHTML = '';
  const intensity = calcIntensity(vols[dataName]);
  const soundCenter = calcSoundCenter(intensity);
  console.log(soundCenter);
  d.innerHTML += '<h3>sound center<h3/>';
  d.innerHTML += `x: ${soundCenter.x} y: ${soundCenter.y}<br/>`;
  d.innerHTML += `angle: ${soundCenter.angle}<br/>`;
  d.innerHTML += '<h3>by quadrant<h3/>';  
  d.innerHTML += `q: ${soundCenter.q}<br/>`;
  d.innerHTML += `ratio: ${soundCenter.ratio}<br/>`;
  d.innerHTML += `awkward: ${soundCenter.awk}`;

  const bya = byAxis(intensity);
  console.log(bya);
  d.innerHTML += '<h3>by axis<h3/>';
  d.innerHTML += `axis: ${bya.axis}<br/>`;
  d.innerHTML += `ratio: ${bya.ratio}<br/>`;
  d.innerHTML += `awkward: ${bya.awk}`;

  let result = twoMic(intensity);
  console.log(result);
  d.innerHTML += '<h3>twoMic<h3/>';
  d.innerHTML += `q: ${result.q}<br/>`;
  d.innerHTML += `ratio: ${result.ratio}<br/>`;

  result = oneMic(intensity);
  console.log(result);
  d.innerHTML += '<h3>oneMic<h3/>';
  d.innerHTML += `q: ${result.q}<br/>`;
  d.innerHTML += `ratio: ${result.ratio}<br/>`;
}
function draw(angle) {
  createCanvas();
  let c1 = new Chart('c1', makeChartData('test 1', vols[angle + '-1']));
  output('r1', angle + '-1');
  let c2 = new Chart('c2', makeChartData('test 2', vols[angle + '-2']));
  output('r2', angle + '-2');
  let c3 = new Chart('c3', makeChartData('near 1', vols[angle + '-n']));
  output('r3', angle + '-n');
  let c4 = new Chart('c4', makeChartData('near 2', vols[angle + '-n1']));
  output('r4', angle + '-n1');



  /*
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
  }*/
}
