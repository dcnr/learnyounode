'use strict';

let sum = 0;
for (let i = 2, len = process.argv.length; i < len; ++i) {
  sum += parseInt(process.argv[i], 10);
}

console.log(sum);
