let consign = require("consign");
module.exports = (io) => {
    consign().include("APP/socketio")
        .into(io);
}