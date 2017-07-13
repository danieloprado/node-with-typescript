import * as lodash from 'lodash';

import { IUser } from '../interfaces/user';
import { User } from '../models/user';

const users: IUser[] = [];

export async function list() {
  return User.query().eager('posts');
}

export async function find(id: number) {
  return User.query().where({ id });
}

export async function insert(user: IUser) {
  user.id = users.length + 1;
  users.push(user);

  return user;
}

export async function update(user: IUser) {
  const userDb = users.find(u => u.id === user.id);
  lodash.merge(userDb, user);

  return userDb;
}

export async function remove(userId: number) {
  const index = users.findIndex(u => u.id === userId);
  users.splice(index, 1);
}