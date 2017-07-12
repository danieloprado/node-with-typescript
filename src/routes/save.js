"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userValidator = require('../validators/user'), userService = require('../services/user');
async function save(req, res, next) {
    try {
        const model = await userValidator(req.body);
        const user = await userService.save(model);
        res.json(user);
    }
    catch (err) {
        next(err);
    }
}
exports.default = save;
