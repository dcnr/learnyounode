'use strict';

const http = require('http');
const url = process.argv[2];


function doneCb(res) {
  res.setEncoding('utf-8');

  let collection = [];

  res.on('data', (data) => {
    collection.push(data);
  });

  res.on('end', () => {
    collection = collection.join('');

    console.log(collection.length);
    console.log(collection);
  });
}


http.get(url, doneCb);
