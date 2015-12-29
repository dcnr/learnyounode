(function () {
   'use strict';

   const fs = require("fs");
   const path = require("path");
   const dir = process.argv[2];
   const ext = "." + process.argv[3];

   fs.readdir(dir, (err, file_list) => {
      const filtered_list = file_list.filter(file => {
         if (~file.indexOf(".")) {
            if (path.extname(file) === ext) {
               return true;
            }

            return false;
         }

         return false;
      });

      filtered_list.forEach(file => {
         console.log(file);
      });
   });
})();
