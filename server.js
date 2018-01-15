const init = function () {
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
    console.log(`SERVIDOR NA PORTA ${(process.env.NODE_ENV.trim() == 'production' ? 3000 : 80)}`)
    server.listen((process.env.NODE_ENV.trim() == 'production' ? 3000 : 80));
}

if (process.env.NODE_ENV.trim() === "production") {
    const cluster = require('cluster');
    const numCPUs = require('os').cpus().length;
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        init();
    }
} else {
    init();
}
