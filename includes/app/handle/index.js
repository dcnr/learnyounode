'use strict';

const fs = require('fs');
const path = require('path');

const file_list = fs.readdirSync(__dirname);

file_list.forEach(f => {
  if (path.extname(f) === '.js' && path.basename(f, '.js') !== 'index') {
    let tmp = require(path.join(__dirname, f));
    exports[tmp.path] = tmp.handler;
  }
});
