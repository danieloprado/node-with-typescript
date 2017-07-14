import * as lodash from 'lodash';

import { IUser } from '../interfaces/user';
import { User } from '../models/user';

const users: IUser[] = [];

export async function list(): Promise<User[]> {
  return User.query().eager('posts').modifyEager('posts', builder => {
    builder.where('slug', 'like', 'meu-post%')
  });
}

export async function find(id: number): Promise<User> {
  return User.query().where({ id }).first();
}

export async function insert(user: IUser): Promise<User> {
  return User.query().insert(user);
}

export async function update(user: IUser): Promise<User> {
  return User.query().updateAndFetchById(user.id, user);
}

export async function remove(userId: number): Promise<void> {
  await User.query().deleteById(userId);
}