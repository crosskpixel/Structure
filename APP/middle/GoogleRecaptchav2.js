var request = require('request');
const secret_key_googleRecaptcha = "6LeeCDsUAAAAAHupPGu4SJ1wawIlXa6E1ljPHfqM";

module.exports.verifyGoogleReCaptcha = (req, res, next) => {
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secret_key_googleRecaptcha + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    request(verificationUrl, (err, response, body) => {
        body = JSON.parse(body);
        console.log(body.success);
        if (body.success == true) {
            next();
        } else {
            res.status(401).json({ status: 401, msg: "Recaptcha não foi prenchido !" });
        }
    });
}