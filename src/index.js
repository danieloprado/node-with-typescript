const express = require('express'), bodyParser = require('body-parser'), router = require('./routes'), error = require('./middlewares/error');
const app = express();
app.use(bodyParser.json());
app.use(router);
app.use(error);
app.listen(8080, () => console.log('done.'));
