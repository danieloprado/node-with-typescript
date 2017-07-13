const userRepository = require('../repositories/user');

async function save(model) {
  if (model.id) {
    return await userRepository.update(model);
  }

  return await userRepository.insert(model);
}

async function remove(id) {
  return await userRepository.remove(id);
}


module.exports = {
  save,
  remove
}