const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/user', userRoutes);

app.use((err, req, res, next) => {
  if (err.validationError) {
    return res.status(400).json(err.details);
  }
  console.error(err);
  res.status(500).send(err.stack);
});

app.listen(3000, () => console.log('done.'));