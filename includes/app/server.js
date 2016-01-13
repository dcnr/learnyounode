'use strict';

const http = require('http');
const url = require('url');

exports.start = function (port, route, handle) {
  http.createServer((req, res) => {
    const parsed_url = url.parse(req.url, true);

    let r = route(handle, parsed_url);

    res.writeHead(r.header.code, r.header.type);
    res.write(r.body);
    res.end();
  }).listen(port);

  console.info('[INFO] Server has started.');
};
