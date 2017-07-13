import 'source-map-support/register';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as userRoutes from './routes/user';

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/user', userRoutes.router);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err.validationError) {
    return res.status(400).json(err.details);
  }

  console.error(err);
  res.status(500).send(err.stack);
});

app.listen(8080, () => console.log('done.'));