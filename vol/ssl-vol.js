'use strict';
const vols = require('./data/volume/back');
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

for (let f in vols[0]) {
  let intensity = [];
  for (let c in vols) 
    intensity.push(vols[c][f]);
  console.log(calcSoundCenter(intensity));
}

