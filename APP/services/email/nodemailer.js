'use strict';
const nodemailer = require('nodemailer');
//Gmail = authorization of google...
const email = "igorpraxedeslinux@gmail.com"
const password = "???"
class Nodemailer {

    constructor() {
        this.optionsOfSend;
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: email,
                pass: password
            }
        });
    }

    setContent(title, text, html = "<div></div>", emailFor) {
        this.optionsOfSend = {
            from: `"Igor" <${email}>`,
            to: emailFor,
            subject: 'Hello ✔',
            text: title,
            html: html
        };
        return this;
    }

    sendEmail() {
        this.transporter.sendMail(this.optionsOfSend, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log(`Email enviado para: ${this.optionsOfSend.to}`);
        });
    }
}

module.exports = Nodemailer;




