"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository = require('../repositories/user');
async function list(req, res) {
    const users = await userRepository.list();
    res.json(users);
}
exports.default = list;
