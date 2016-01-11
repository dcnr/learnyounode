'use strict';

const readdir = require('fs')
  .readdir;

const extname = require('path')
  .extname;

const dir = process.argv[2];
const ext = '.' + process.argv[3];

readdir(dir, (err, file_list) => {
  if (err) {
    return console.log(err);
  }

  file_list.forEach(file => {
    if (extname(file) === ext) {
      console.log(file);
    }
  });
});
