const express = require('express'),
  bodyParser = require('body-parser'),
  router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(router);

app.use((err, req, res, next) => {
  if (err.validationError) {
    return res.status(400).json(err.details);
  }

  console.error(err);
  res.status(500).send(err.stack);
});

app.listen(8080, () => console.log('done.'));