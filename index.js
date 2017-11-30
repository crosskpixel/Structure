let jwt = require("jsonwebtoken");

let token = jwt.sign({ user_id: 1234 }, "super_secret");

let decoded = jwt.verify(token, "super_secret");
console.log(decoded);
console.log(token);


