'use strict';
const intensity = [1000, 0, 0, 0]
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
const mics = [micA, micB, micC, micD];
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
console.log(soundCenter);