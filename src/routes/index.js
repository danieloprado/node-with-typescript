const Router = require('express').Router,
  list = require('./list'),
  get = require('./get'),
  save = require('./save');

const router = Router({ mergeParams: true });

router.get('/', list);
router.get('/:id', get);
router.post('/', save);

module.exports = router;