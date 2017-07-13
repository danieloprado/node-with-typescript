import * as userRepository from '../repositories/user';

export async function save(model) {
  if (model.id) {
    return await userRepository.update(model);
  }

  return await userRepository.insert(model);
}

export async function remove(id) {
  return await userRepository.remove(id);
}