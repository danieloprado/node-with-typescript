"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
const users = [];
async function list() {
    return users;
}
exports.list = list;
async function find(id) {
    return users.find(u => u.id === id);
}
exports.find = find;
async function insert(user) {
    user.id = users.length + 1;
    users.push(user);
    return user;
}
exports.insert = insert;
async function update(user) {
    const userDb = users.find(u => u.id === user.id);
    lodash.merge(userDb, user);
    return userDb;
}
exports.update = update;
async function remove(userId) {
    const index = users.findIndex(u => u.id === userId);
    users.splice(index, 1);
}
exports.remove = remove;
