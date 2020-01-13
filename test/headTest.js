const head = require('../head');
const assertEqual = require('../assertEqual');

let testArr = ['A',2,3,4];
assertEqual(head(testArr) , 'A');