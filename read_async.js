(function(){
   'use strict';

   const fs = require("fs");
   const fp = process.argv[2];

   fs.readFile(fp, (err, f) => {
      console.log(f.toString().split("\n").length - 1);
   });
})();
