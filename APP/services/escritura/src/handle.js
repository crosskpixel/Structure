let Handlebars = require("handlebars");
let utils = require("./utils");

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper("switch", function (value, options) {
    this._switch_value_ = value;
    var html = options.fn(this); // Process the body of the switch block
    delete this._switch_value_;
    return html;
});

Handlebars.registerHelper("DateToString", function (arg1,t = 1) {
    return utils.DataPorExtenso(arg1, 1);
});

Handlebars.registerHelper("upperCase", function (arg1) {
    return arg1.toUpperCase();
})
/*
{{#switch letter}}
  {{#case "a"}}
    A is for alpaca
  {{/case}}
  {{#case "b"}}
    B is for bluebird
  {{/case}}
{{/switch}}
*/

Handlebars.registerHelper("case", function (value, options) {
    if (value == this._switch_value_) {
        return options.fn(this);
    }
});

module.exports = Handlebars;