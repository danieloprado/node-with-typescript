"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const userRoutes = require("./routes/user");
const app = express();
app.use(bodyParser.json());
app.use('/api/user', userRoutes.router);
app.use((err, req, res, next) => {
    if (err.validationError) {
        return res.status(400).json(err.details);
    }
    console.error(err);
    res.status(500).send(err.stack);
});
app.listen(8080, () => console.log('done.'));
