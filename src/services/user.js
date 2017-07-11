const userRepository = require('../repositories/user');

async function save(model) {
  if (model.id) {
    return await userRepository.update(model);
  }

  return await userRepository.insert(model);
}

module.exports = {
  save
}