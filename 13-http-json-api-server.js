'use strict';

const port = process.argv[2];
const route = require('./includes/app/route');
const handle = require('./includes/app/handle');
const server = require('./includes/app/server');


server.start(port, route, handle);
