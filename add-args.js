(function (){
   'use strict';

   let total = 0;
   for (let i = 2, len = process.argv.length; i < len; ++i) {
      total += parseInt(process.argv[i], 10);
   }

   console.log(total);
})();
