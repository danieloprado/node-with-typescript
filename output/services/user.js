"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository = require("../repositories/user");
async function save(model) {
    if (model.id) {
        return await userRepository.update(model);
    }
    return await userRepository.insert(model);
}
exports.save = save;
async function remove(id) {
    return await userRepository.remove(id);
}
exports.remove = remove;
