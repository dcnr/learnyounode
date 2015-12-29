(function() {
   'use strict';

   const fs = require("fs");
   const fp = process.argv[2];

   const f = fs.readFileSync(fp);

   console.log(f.toString().split("\n").length - 1);
})();
