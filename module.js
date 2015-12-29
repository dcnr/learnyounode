(function() {
   'use strict';

   const mfilter = require("./mfilter");

   const dir = process.argv[2];
   const ext = process.argv[3];

   mfilter(dir, ext, (err, file_list) => {
      if (err) {
         return console.log(err);
      }

      file_list.forEach(file => {
         console.log(file);
      });
   });
})();
