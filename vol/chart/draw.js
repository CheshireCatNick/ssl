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
function drawData(dataNames) {
  createCanvas();
  let c1 = new Chart('c1', makeChartData(dataNames[0], vols[dataNames[0]]));
  output('r1', dataNames[0]);
  let c2 = new Chart('c2', makeChartData(dataNames[1], vols[dataNames[1]]));
  output('r2', dataNames[1]);
  let c3 = new Chart('c3', makeChartData(dataNames[2], vols[dataNames[2]]));
  output('r3', dataNames[2]);
  let c4 = new Chart('c4', makeChartData(dataNames[3], vols[dataNames[3]]));
  output('r4', dataNames[3]);
  return;
}
function draw(angle) {
  createCanvas();
  if (angle === 'temp') {
    //let dataNames = ['l-0-1', 'l-90-1', 'l-180-1', 'l-270-1'];
    //let dataNames = ['l-90-1', 'l-90-2', 'l-270-1', 'l-270-2'];
    //let dataNames = ['w-l-90-1', 'w-l-90-2', 'w-l-270-1', 'w-l-270-2'];
    //let dataNames = ['th-l-90-1', 'th-l-90-2', 'th-l-90-3', 'th-l-90-4'];
    //let dataNames = ['th-l-270-1', 'th-l-270-2', 'th-l-270-3', 'th-l-270-4'];
    //let dataNames = ['s-90-1', 's-90-2', 's-90-3'];
    //let dataNames = ['s-270-1', 's-270-2', 's-270-3'];
    //let dataNames = ['sth-90-1', 'sth-90-2', 'sth-90-3', 'sth-90-4'];
    //let dataNames = ['sth-270-1', 'sth-270-2', 'sth-270-3', 'sth-270-4'];
    //let dataNames = ['sr-90-1', 'sr-90-2', 'sr-90-3'];
    //let dataNames = ['sr-270-1', 'sr-270-2', 'sr-270-3', 'sr-270-4'];
    let dataNames = ['srth-90-1', 'srth-90-2', 'srth-270-1', 'srth-270-2'];

    let c1 = new Chart('c1', makeChartData(dataNames[0], vols[dataNames[0]]));
    output('r1', dataNames[0]);
    let c2 = new Chart('c2', makeChartData(dataNames[1], vols[dataNames[1]]));
    output('r2', dataNames[1]);
    let c3 = new Chart('c3', makeChartData(dataNames[2], vols[dataNames[2]]));
    output('r3', dataNames[2]);
    let c4 = new Chart('c4', makeChartData(dataNames[3], vols[dataNames[3]]));
    output('r4', dataNames[3]);
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
