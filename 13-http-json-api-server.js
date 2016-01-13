'use strict';

const http = require('http');
const url = require('url');
const port = process.argv[2];


function parseTime(time) {
  const date = new Date(time);

  const time_json = {
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  };


  return JSON.stringify(time_json);
}


function parseUnix(time) {
  const date = new Date(time);

  const unix_time = {
    "unixtime": date.getTime()
  };

  return JSON.stringify(unix_time);
}


function route(url) {
  if (url.pathname === '/api/parsetime') {
    return parseTime(url.query.split('=')[1]);
  }

  if (url.pathname === '/api/unixtime') {
    return parseUnix(url.query.split('=')[1]);
  }
}


function serverHandler(req, res) {
  if (req.method === 'GET') {
    const parsed_url = url.parse(req.url);
    const parsed_time = route(parsed_url);

    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(parsed_time);
  }

  res.writeHead(404);
  res.end('Only GET methods supported');
}


http.createServer(serverHandler)
  .listen(port);
