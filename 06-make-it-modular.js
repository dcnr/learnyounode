'use strict';

const mfilter = require('./includes/mfilter');

const dir = process.argv[2];
const ext = process.argv[3];


mfilter(dir, ext, function (err, list) {
  if (err) {
    return console.error(err);
  }

  list.forEach(function (file) {
    console.log(file);
  });
});
