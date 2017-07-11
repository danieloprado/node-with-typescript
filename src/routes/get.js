const userRepository = require('../repositories/user');

async function get(req, res, next) {
  try {
    const user = await userRepository.find(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = get;