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
  if (angle === 'temp') {
    let dataNames = ['long-back', 'long-front'];
    console.log(vols[dataNames[1]][2].length, vols[dataNames[1]][3].length);
    let c1 = new Chart('c1', makeChartData(dataNames[0], vols[dataNames[0]]));
    output('r1', dataNames[0]);
    let c2 = new Chart('c2', makeChartData(dataNames[1], vols[dataNames[1]]));
    output('r2', dataNames[1]);
    /*
    let c3 = new Chart('c3', makeChartData('near 1', vols[angle + '-n']));
    output('r3', angle + '-n');
    let c4 = new Chart('c4', makeChartData('near 2', vols[angle + '-n1']));
    output('r4', angle + '-n1');*/
    return;
  }
  let c1 = new Chart('c1', makeChartData('test 1', vols[angle + '-1']));
  output('r1', angle + '-1');
  let c2 = new Chart('c2', makeChartData('test 2', vols[angle + '-2']));
  output('r2', angle + '-2');
  let c3 = new Chart('c3', makeChartData('near 1', vols[angle + '-n']));
  output('r3', angle + '-n');
  let c4 = new Chart('c4', makeChartData('near 2', vols[angle + '-n1']));
  output('r4', angle + '-n1');
}
