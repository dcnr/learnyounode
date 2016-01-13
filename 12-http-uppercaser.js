'use strict';

const http = require('http');
const port = process.argv[2];
const log = [];

function collect(chunk) {
  log.push(chunk.toString().toUpperCase());
}


http
  .createServer((req, res) => {
    if (req.method === 'POST') {
      req.on('data', collect);

      req.on('end',() => {
        res.writeHead(200, {"content-type": "text/plain"});

        log.forEach(l => {
          res.write(l);
        });

        res.end();
      });
    }
  })
  .listen(port);
