"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const userRepository = require("../repositories/user");
const userService = require("../services/user");
const user_1 = require("../validators/user");
exports.router = express.Router({ mergeParams: true });
exports.router.get('/', async (req, res, next) => {
    try {
        const users = await userRepository.list();
        res.json(users);
    }
    catch (err) {
        next(err);
    }
});
exports.router.get('/:id', async (req, res, next) => {
    try {
        const user = await userRepository.find(req.params.id);
        res.json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/', async (req, res, next) => {
    try {
        const model = await user_1.default(req.body);
        const user = await userService.save(model);
        res.json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.router.delete('/:id', async (req, res, next) => {
    try {
        await userService.remove(req.params.id);
        res.send();
    }
    catch (err) {
        next(err);
    }
});
