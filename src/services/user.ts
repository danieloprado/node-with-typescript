import * as userRepository from '../repositories/user';

import { IUser } from '../interfaces/user';

export async function save(model: IUser): Promise<IUser> {
  if (model.id) {
    return await userRepository.update(model);
  }

  return await userRepository.insert(model);
}

export async function remove(id: number): Promise<void> {
  return await userRepository.remove(id);
}