let jwtApp = require("./../../middle/JsonWebToken");

module.exports = (app) => {
    app.post("/login", (req, res) => {
        var body = req.body;
        jwtApp.login(body.username, body.password).then(token => {
            res.status(200).json({ token: token });
        }).catch(err => res.status(401).json({ msg: err }));
    });

    app.post("/auth", jwtApp.authJWT, (req, res) => {
        
    });
}