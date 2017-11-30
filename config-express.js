let _express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let cors = require("cors");

module.exports = (app) => {
    app.use(_express.static(path.join(app.ROOT_PATH, "public")));
    app.set('views', path.join(app.ROOT_PATH, "views"));
    app.set('view engine', 'ejs');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(cors({ origin: "*", allowedHeaders: ["Content-Type", "Authorization"] }));
    app.use((req, res, next) => {
        req.ROOT_PATH = app.ROOT_PATH;
        res.setHeader("Cache-Control", 'no-cache');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader('Access-Control-Allow-Credentials', false);
        res.setHeader('Access-Control-Max-Age', '1728000');
        next();
    });

    //Configurações do SequelizeJS
    var db = require("./APP/model/HandlerDB.js");
    db.sequelize.sync({ force: false }).then(() => console.log("DATABASE-CREATED"));

}