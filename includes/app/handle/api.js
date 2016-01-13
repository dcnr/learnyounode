'use strict';


function parseTime(query) {
  let date = new Date(query.iso);

  return {
    header: {
      code: 200,
      type: {
        "Content-Type": "application/json"
      }
    },
    body: JSON.stringify({
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    })
  };
}


function parseUnixTime(query) {
  let date = new Date(query.iso);

  return {
    header: {
      code: 200,
      type: {
        "Content-Type": "application/json"
      }
    },
    body: JSON.stringify({
      "unixtime": date.getTime()
    })
  };
}


exports.path = 'api';
exports.handler = function (path, query) {
  if (path === 'parsetime') {
    return parseTime(query);
  }

  if (path === 'unixtime') {
    return parseUnixTime(query);
  }

  return {
    header: {
      code: 404
    },
    body: "404 - Not Found"
  };
};
