let consign = require("consign");
module.exports = (io) => {
    io.sockets.on("connection", (client) => {
        client.emit("init", "This servers is initialized");
        consign().include("APP/socketio")
            .into(client);
    });
}