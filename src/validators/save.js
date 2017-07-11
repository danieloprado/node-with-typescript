const joi = require('joi'),
  BaseValidator = require('./base');

class SaveValidator extends BaseValidator {
  constructor() {
    super(joi.object().keys({
      id: joi.number().min(1),
      name: joi.string().required().min(3),
      email: joi.string().email().required(),
      age: joi.number().required().min(18)
    }));
  }
}

module.exports = new SaveValidator();