'use strict';

const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const f = process.argv[3];


http
  .createServer((req, res) => {
    req.writeHead(200, {"content-type": "text/plain"});

    fs
      .createReadStream(f, {encoding: 'utf-8'})
      .pipe(res);
  })
  .listen(port);
