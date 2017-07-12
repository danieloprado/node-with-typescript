"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const error = require("./middlewares/error");
var app = express();
app.use(bodyParser.json());
app.use(router);
app.use(error);
app.listen(8080, () => console.log('done.'));
