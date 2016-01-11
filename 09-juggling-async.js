'use strict';

const http = require('http');
const EventEmitter = require('events')
  .EventEmitter;

const urls = Array.prototype.slice.call(process.argv, 2);
const ee = new EventEmitter();
let collection = [];


function collect(idx, body) {
  collection.push([idx, body]);

  ee.emit('collected');
}


function log() {
  if (collection.length === urls.length) {
    collection = collection.sort((a, b) => a[0] - b[0]);

    collection.forEach(data => {
      console.log(data[1]);
    });
  }
}


ee.addListener('get-end', collect);
ee.addListener('collected', log);


urls.forEach(function (url, idx) {
  let body = '';

  http.get(url, (res) => {
    res.setEncoding('utf-8');

    res.on('data', (data) => {
      body += data;
    });

    res.on('end', () => {
      ee.emit('get-end', idx, body);
    });
  });
});
