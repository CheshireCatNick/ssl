'use strict';
const vols = require('./data/volume/' + process.argv[2]);
const channelNum = 4;
const frameNum = vols[0].length;

const micA = {
  x: 3.09,
  y: 2.06
};
const micB = {
  x: -3.09,
  y: 2.06
};
const micC = {
  x: -5.58,
  y: -2.15
};
const micD = {
  x: 5.58,
  y: -2.15
};
// sort by channel
const mics = [micC, micD, micB, micA];

function indexOfMax(arr) {
  if (arr.length === 0) return -1;
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++)
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  return maxIndex;
}
function calcSoundCenter(intensity) {
  const soundCenter = {
    x: 0,
    y: 0
  };
  let intensitySum = 0
  for (let i in mics) {
    let mic = mics[i]
    soundCenter.x += mic.x * intensity[i];
    soundCenter.y += mic.y * intensity[i];
    intensitySum += intensity[i];
  }
  soundCenter.x /= intensitySum;
  soundCenter.y /= intensitySum;
  return soundCenter;
}
function calcAngle(x, y) {
  const rad = Math.atan2(y, x);
  const deg = rad * (180 / Math.PI);
  return deg;
}
function calcConfidence(a) {
  a = a.slice(1);
  let min = a[0];
  let max = a[0];
  for (let n of a) {
    min = (n < min) ? n : min;
    min = (n > max) ? n : max;
  }
  console.log(max);
  max += Math.min




  return 0;
}
let avgsc = {
  x: 0,
  y: 0
};
for (let f in vols[0]) {
  let intensity = [];
  for (let c in vols) 
    intensity.push(vols[c][f]);
  console.log(vols[0][f] - vols[1][f]);
  let tsc = calcSoundCenter(intensity);
  //console.log(tsc)
  avgsc.x += tsc.x;
  avgsc.y += tsc.y;
}
avgsc.x /= frameNum;
avgsc.y /= frameNum;
console.log('avg = ', avgsc);
console.log(calcAngle(avgsc.x, avgsc.y));

let intensity = [0, 0, 0, 0, 0];
for (let f in vols[0]) {
  for (let c = 0; c < channelNum; c++) 
    intensity[c + 1] += vols[c][f];
}
let result = [0, 0, 0, 0, 0];
// threshold?
/*
if (intensity[1] + intensity[2] - (intensity[3] + intensity[4]) > 0) {
  result[3] += 1;
  result[4] += 1;
}
else {
  result[1] += 1;
  result[2] += 1;
}
if (intensity[1] + intensity[3] - (intensity[2] + intensity[4]) > 0) {
  result[2] += 1;
  result[3] += 1;
}
else {
  result[1] += 1;
  result[4] += 1;
}*/
const hi1234 = 550000000;
const hi1324 = 0;
const sc1234 = intensity[1] + intensity[2] - (intensity[3] + intensity[4]) + hi1234;
const sc1324 = intensity[1] + intensity[3] - (intensity[2] + intensity[4]) + hi1324;
console.log(sc1234);
console.log(sc1324);

result[1] += -sc1234 - sc1324;
result[2] += -sc1234 + sc1324;
result[3] += sc1234 + sc1324;
result[4] += sc1234 - sc1324;
console.log(result);
console.log(indexOfMax(result));
console.log(calcConfidence(result));