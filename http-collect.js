(function () {
   'use strict';

   const http = require("http");
   const url = process.argv[2];


   http.get(url, cbRes);

   let data_stream = "";

   function cbRes(res) {
      res.setEncoding("utf-8");

      res.on('data', (data) => {
         data_stream += data;
      });

      res.on('end', () => {
         console.log(data_stream.length);
         console.log(data_stream);
      });
   }
})();
