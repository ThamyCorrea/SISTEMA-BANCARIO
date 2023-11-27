const express = require("express");
const routes = require("./routes");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT

app.listen(port);
console.log(`Escutando a porta ${port}`);