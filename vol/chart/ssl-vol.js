'use strict';
//const vols = require('./data/volume/' + process.argv[2]);
const channelNum = 4;
// all of the index is sorted by quadrant
// [0, q1, q2, q3, q4]
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
const mics = [undefined, micA, micB, micC, micD];
function round(a) {
  return Math.round(a * 10) / 10;
}
function calcIntensity(vols) {
  let intensity = [0, 0, 0, 0, 0];
  for (let f in vols[0]) 
    for (let c = 0; c < channelNum; c++) 
      intensity[c + 1] += vols[c][f];
  return [0, intensity[4], intensity[3], intensity[1], intensity[2]];
}
function calcAngle(x, y) {
  const rad = Math.atan2(y, x);
  const deg = rad * (180 / Math.PI);
  return deg;
}
function calcSoundCenter(intensity) {
  const soundCenter = {
    x: 0,
    y: 0
  };
  let intensitySum = 0;
  for (let i = 1; i <= 4; i++) {
    let mic = mics[i];
    soundCenter.x += mic.x * intensity[i];
    soundCenter.y += mic.y * intensity[i];
    intensitySum += intensity[i];
  }
  soundCenter.x /= intensitySum;
  soundCenter.y /= intensitySum;
  const labelData = [
    { l: 1, v: intensity[1] },
    { l: 2, v: intensity[2] },
    { l: 3, v: intensity[3] },
    { l: 4, v: intensity[4] },
  ];
  labelData.sort((a, b) => a.v - b.v);
  const maxL = labelData[3].l;
  const secL = labelData[2].l;
  let q;
  let awk;
  console.log(maxL, secL);
  if ((maxL + 1) % 4 !== secL % 4 && (maxL + 3) % 4 !== secL % 4){
    awk = true;
    q = labelData[1].l;
  }
  else {
    awk = false;
    q = maxL;
  }

  return {
    x: round(soundCenter.x),
    y: round(soundCenter.y),
    angle: round(calcAngle(soundCenter.x, soundCenter.y)),
    q: q,
    awk: awk
  };
}
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
function calcRatio(a) {
  // relative max props
  // max props if min props = 0
  a = a.slice(1);
  a.sort((a, b) => a - b);
  const amin = Math.abs(a[0]);
  for (let i in a)
    a[i] += amin;
  return a[3] / a[2];
}
function twoMic(intensity) {
  // threshold?
  const hi3412 = 550000000;
  const hi2314 = 0;
  const sc3412 = intensity[3] + intensity[4] - (intensity[1] + intensity[2]);
  const sc2314 = intensity[2] + intensity[3] - (intensity[1] + intensity[4]) + hi2314;

  let result = [0, 0, 0, 0, 0];
  if (sc3412 > 0) {
    result[3] += sc3412;
    result[4] += sc3412;
  }
  else {
    result[1] -= sc3412;
    result[2] -= sc3412;
  }
  if (sc2314 > 0) {
    result[2] += sc2314;
    result[3] += sc2314;
  }
  else {
    result[1] -= sc2314;
    result[4] -= sc2314;
  }
  /*
  result[1] += -sc1234 - sc1324;
  result[2] += -sc1234 + sc1324;
  result[3] += sc1234 + sc1324;
  result[4] += sc1234 - sc1324;*/
  return {
    result: result.slice(1),
    q: indexOfMax(result),
    ratio: round(calcRatio(result))
  };
}
function oneMic(intensity) {
  let result = [0, 0, 0, 0, 0];
  const hi = [];
  for (let i = 1; i <= channelNum; i++) {
    result[i] = intensity[i] * 4;
    for (let j = 1; j <= channelNum; j++)
      result[i] -= (intensity[j] + 0);
  }
  return {
    result: result.slice(1),
    q: indexOfMax(result),
    ratio: round(calcRatio(result))
  };
}
