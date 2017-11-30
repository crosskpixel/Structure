module.exports = (io) => {
    io.sockets.on("connection", (client) => {
        client.emit("init", "This servers is initialized");
    });
}