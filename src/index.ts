import * as bodyParser from 'body-parser';
import * as express from 'express';

import { error } from './middlewares/error';
import { router } from './routes';

var app = express();

app.use(bodyParser.json());
app.use(router);
app.use(error);

app.listen(8080, () => console.log('done.'));