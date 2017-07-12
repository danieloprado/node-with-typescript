var userValidator = require('../validators/user'),
  userService = require('../services/user');

async function save(req, res, next) {
  try {
    var model = await userValidator(req.body);
    var user = await userService.save(model);

    res.json(user);
  } catch (err) {
    next(err);
  }
}


module.exports = save;