import * as lodash from 'lodash';

const users = [];

export async function list() {
  return users;
}

export async function find(id) {
  return users.find(u => u.id === id);
}

export async function insert(user) {
  user.id = users.length + 1;
  users.push(user);

  return user;
}

export async function update(user) {
  const userDb = users.find(u => u.id === user.id);
  lodash.merge(userDb, user);

  return userDb;
}

export async function remove(userId) {
  const index = users.findIndex(u => u.id === userId);
  users.splice(index, 1);
}