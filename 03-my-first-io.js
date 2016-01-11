'use strict';

const readFileSync = require('fs')
  .readFileSync;
const fp = process.argv[2];

const result = readFileSync(fp, 'utf-8')
  .split('\n')
  .length - 1;

console.log(result);
