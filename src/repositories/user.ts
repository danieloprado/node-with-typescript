var lodash = require('lodash');

var users = [];

async function list() {
  return users;
}

async function find(id) {
  return users.find(u => u.id === id);
}

async function insert(user) {
  user.id = users.length + 1;
  users.push(user);

  return user;
}

async function update(user) {
  var userDb = users.find(u => u.id === user.id);
  lodash.merge(userDb, user);

  return userDb;
}

async function remove(userId) {
  var index = users.findIndex(u => u.id === userId);
  users.splice(index, 1);
}

module.exports = { list, insert, update, remove };