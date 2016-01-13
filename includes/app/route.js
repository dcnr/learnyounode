'use strict';

module.exports = function (handle, parsed_url) {
  const pathname = parsed_url.pathname.split('/');
  const query = parsed_url.query;


  if (typeof handle[pathname[1]] === 'function') {
    return handle[pathname[1]](pathname[2], query);
  }


  return {
    header: {
      code: 404,
      type: {
        "Content-Type": "text/plain"
      }
    },
    body: "404 - Not Found"
  };
};
