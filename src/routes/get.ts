import userRepository = require('../repositories/user');

export default async function get(req, res, next) {
  try {
    var user = await userRepository.find(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
}