import express = require('express');
import list = require('./list');
import get = require('./get');
import save = require('./save');

var router = express.Router({ mergeParams: true });

router.get('/', list);
router.get('/:id', get);
router.post('/', save);

export default router;