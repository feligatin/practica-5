const express = require("express");
const app = express();
app.use(express.json());
//rutas
const server = app.listen(3000);
app.use("/users", require ("./routes/user"))
console.log("Server corriendo en el Puerto 3000");

module.exports = server;