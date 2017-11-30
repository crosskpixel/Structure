let db = require("./../../model/HandlerDB");
let UserCheck = require("./../../Utils/checkDataBase/userCheck");
const crypto = require("crypto");
const secret_key = require("./../../Utils/SECRET_KEY")();


module.exports.registerUser = (req, res) => {
    var body = req.body;
    var userCheck = new UserCheck(body.name, body.username, body.password, body.email);
    userCheck.usernameAvailable().then(checkUsername => {
        userCheck.emailAvailable().then(checkEmail => {
            var hash = crypto.createHmac("md5", secret_key).update(body.password).digest("hex");
            db.user.create({
                name: body.name,
                username: body.username,
                password: hash,
                email: body.email,
                email_auth: false
            }).then(() => res.send("true"));
        }).catch(err => res.send(err));
    }).catch(err => res.send(err));
}