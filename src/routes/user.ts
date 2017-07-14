import * as express from 'express';
import * as userRepository from '../repositories/user';
import * as userService from '../services/user';

import userValidator from '../validators/user';

export const router = express.Router({ mergeParams: true });

router.get('/', async (req, res, next) => {
  try {
    const users = await userRepository.list();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await userRepository.find(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const model = await userValidator(req.body);
    const user = await userService.save(model);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await userService.remove(req.params.id);
    res.send();
  } catch (err) {
    next(err);
  }
});