const express = require('express'),
  userRepository = require('./repositories/user'),
  userValidator = require('./validators/user'),
  userService = require('./services/user');

const router = express.Router({ mergeParams: true });

router.get('/', async(req, res, next) => {
  try {
    const users = await userRepository.list();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async(req, res, next) => {
  try {
    const user = await userRepository.find(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async(req, res, next) => {
  try {
    const model = await userValidator(req.body);
    const user = await userService.save(model);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;