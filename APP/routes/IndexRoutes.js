let GoogleRecpatchav2 = require("./../middle/GoogleRecaptchav2");

let GERAR = require("./../services/escritura/escritura");

module.exports = (app) => {

    app.get("/", (req, res) => {
        //    res.render("index.ejs", { teste: "KSKSKSS" });
        res.send(GERAR.getExample());

    });



}