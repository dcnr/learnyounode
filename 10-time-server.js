'use strict';

const net = require('net');
const port = process.argv[2];


function fmtDate(date) {
  /* jshint -W014 */

  function pad(d) {
    return d < 10
      ? '0' + d.toString()
      : d.toString();
  }

  const str_date = date
    .getUTCFullYear().toString() + '-' +
    pad(date.getMonth() + 1) + '-' +
    pad(date.getDate()) + ' ' +
    pad(date.getHours()) + ':' +
    pad(date.getMinutes()) + '\n';

  return str_date;
}


net
  .createServer(function (s) {
    s.end(fmtDate(new Date()));
  })
  .listen(port);
