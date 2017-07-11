const userRepository = require('../repositories/user');

async function list(req, res) {
  const users = await userRepository.list();
  res.json(users);
}

module.exports = list;