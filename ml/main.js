'use strict';

const svm = require('node-svm');
const xor = [
    [[0, 0], 0],
    [[0, 1], 1],
    [[1, 0], 1],
    [[1, 1], 0]
];
const d270 = require('../data/freq/270.js');
const d90 = require('../data/freq/90.js');

const trainData = [];
let labelData = [];
let data = [];
for (let i in d90) {
  data = [];
  for (let j = 10; j <= 110; j++)
    data.push(d90[i][0][j]);
  for (let j = 10; j <= 110; j++)
    data.push(d90[i][1][j]);
  labelData = [];
  labelData.push(data);
  labelData.push(0);
  console.log(labelData[0].length);
  trainData.push(labelData);
  
  data = [];
  for (let j = 10; j <= 110; j++)
    data.push(d270[i][0][j]);
  for (let j = 10; j <= 110; j++)
    data.push(d270[i][1][j]);

  labelData = [];
  labelData.push(data);
  labelData.push(1);
  console.log(labelData[0].length);

  trainData.push(labelData);
}
//console.log(trainData[0]);
// initialize a new predictor
//const classifier = new svm.CSVC();

const classifier = new svm.SVM({
    svmType: 'C_SVC',
    c: [0.03125, 0.125, 0.5, 2, 8], 

    // kernels parameters
    kernelType: 'RBF',  
    gamma: [0.03125, 0.125, 0.5, 2, 8],

    // training options
    kFold: 4,               
    normalize: true,        
    reduce: true,           
    retainedVariance: 0.99, 
    eps: 1e-3,              
    cacheSize: 200,               
    shrinking : true,     
    probability : false     
});
classifier.train(trainData)
  .progress((rate) => {
    console.log(rate);
  })
  .spread((model, report) => {
    console.log(report);
  })
  .done(() => {
    // predict things
    /*
    xor.forEach(function(ex){
        var prediction = classifier.predictSync(ex[0]);
        console.log('%d XOR %d => %d', ex[0][0], ex[0][1], prediction);
    });*/
    let count = 0;
    for (let d of d90) {
      const prediction = classifier.predictSync(d[0]);
      //console.log(prediction);
      if (prediction === 0) count++;
    }
    console.log(count);
});