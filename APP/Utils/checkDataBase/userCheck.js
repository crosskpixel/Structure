let db = require("./../../model/HandlerDB");

class UserCheck {

    constructor(name, username, password, email) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    usernameAvailable() {
        return new Promise((resolve, reject) => {
            db.user.findAll({
                where: {
                    username: this.username
                }
            }).then(user => {
                if (user.length == 0) {
                    return resolve(true)
                } else {
                    return reject({ statusCode: 409, msg: "Este nome de usuario ja está em uso" });
                }
            }).catch(err => reject({ statusCode: 500, msg: "Ocorreu algum erro no banco de dados." }));
        });
    }

    emailAvailable() {
        return new Promise((resolve, reject) => {
            db.user.findAll({
                where: {
                    email: this.email
                }
            }).then(user => {
                if (user.length == 0) {
                    return resolve(true)
                } else {
                    return reject(false);
                }
            })
                .catch(err => reject({ msg: "Ocorreu algum erro no banco de dados." }));
        });
    }
}
module.exports = UserCheck;