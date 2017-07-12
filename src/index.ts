import express = require('express');
import bodyParser = require('body-parser');
import router = require('./routes');
import error = require('./middlewares/error');

var app = express();

app.use(bodyParser.json());
app.use(router);
app.use(error);

app.listen(8080, () => console.log('done.'));