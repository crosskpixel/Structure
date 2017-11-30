'use strict'
let consign = require("consign");
let app = require("express")();
app.ROOT_PATH = __dirname;
require("./config-express")(app);

consign()
.include("app/routes")
    .into(app);

app.listen(80);


