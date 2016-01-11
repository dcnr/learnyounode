'use strict';

const readFile = require('fs')
  .readFile;
const fp = process.argv[2];

readFile(fp, 'utf-8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  return console.log(data.split('\n').length - 1);
});
