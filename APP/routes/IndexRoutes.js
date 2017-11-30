let GoogleRecpatchav2 = require("./../middle/GoogleRecaptchav2");

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.render("index.ejs", { teste: "KSKSKSS" });
    });

    app.post("/captcha", GoogleRecpatchav2.verifyGoogleReCaptcha, (req, res) => {
        app.io.emit("la","ça");
        res.send("TRUEZAO");
    });

}