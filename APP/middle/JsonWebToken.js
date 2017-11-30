const secret_key = require("./../Utils/SECRET_KEY")();
let db = require("./../model/HandlerDB");
let crypto = require("crypto");
let jwt = require("jsonwebtoken");

module.exports.login = (username, password) => {
    return new Promise((resolve, reject) => {
        db.user.findOne({
            where: {
                username: username
            }
        }).then(user => {
            if (user) {
                if (crypto.createHmac("md5", secret_key).update(password).digest("hex") == user.password) {
                    var token = jwt.sign({ id: user.id }, secret_key, { expiresIn: 60 * 60 });
                    resolve(token);
                } else {
                    console.log("senha incorreta");
                    reject("Senha incorreta");
                }
            } else {
                console.log("user incorreto");
                reject("Usuario não encontrado");
            }
        });
    });
}

module.exports.authJWT = (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer")) {
        res.send({ msg: "token não encontrado" })
    } else {
        var token = req.headers.authorization.split("Bearer").pop().trim();;
        jwt.verify(token, secret_key, (err, data) => {
            if (err) {
                res.status(401).json({ error: 401, msg: "invalid token" });
            } else {
                req.id = data.id;
                next();
            }
        })
    }
}