let register_user_ctrl = require("./../../controller/register/register_user_ctrl");

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

module.exports = (app) => {
    //Registro de usuario
    app.post("/register", [
        check('email').exists().trim().isEmail().withMessage("Email inválido"),
        check('password').exists().trim().isLength({ min: 4 }).withMessage("Digite uma senha válida"),
        check('username').exists().isLength({ min: 5 }).withMessage("Username inválido"),
        check('name').exists().isLength({ min: 6 }).withMessage("Digite seu nome completo")
    ], (req, res, next) => !validationResult(req).isEmpty() ? res.json(validationResult(req).mapped()) : next(),
        register_user_ctrl.registerUser);
        
}
