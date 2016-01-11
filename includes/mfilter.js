const fs = require('fs');
const path = require('path');

function mfilter(dir, ext, cb) {
  'use strict';

  ext = '.' + ext;

  fs.readdir(dir, (err, file_list) => {
    if (err) {
      return cb(err);
    }

    const filtered_list = file_list.filter(file =>
      path.extname(file) === ext
    );

    cb(null, filtered_list);
  });
}


module.exports = mfilter;
