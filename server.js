'use strict'
let http = require("http");
let consign = require("consign");
let io = require("socket.io")();
let app = require("express")();
app.ROOT_PATH = __dirname;
require("./config-express")(app);
require("./config-socket_io.js")(io);
app.io = io;

consign()
    .include("app/routes")
    .into(app);

let server = http.createServer(app);
io.attach(server);
console.log(`SERVIDOR NA PORTA ${(process.env.NODE_ENV == 'production' ? 3000 : 80)}`)
server.listen((process.env.NODE_ENV == 'production' ? 3000 : 80));