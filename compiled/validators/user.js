"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
function validate(body) {
    return new Promise((resolve, reject) => {
        var schema = joi.object().keys({
            id: joi.number().min(1),
            name: joi.string().required().min(3),
            email: joi.string().email().required(),
            age: joi.number().required().min(18)
        });
        var options = {
            stripUnknown: true,
            abortEarly: false
        };
        joi.validate(body, schema, options, (err, value) => {
            if (err) {
                return reject({
                    validationError: true,
                    details: err.details.map(d => d.message)
                });
            }
            resolve(value);
        });
    });
}
exports.default = validate;
