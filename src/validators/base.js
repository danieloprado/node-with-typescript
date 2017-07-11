const joi = require('joi');

class BaseValidator {
  constructor(schema) {
    this.schema = schema;
    this.options = {
      stripUnknown: true,
      abortEarly: false
    };
  }

  validate(value) {
    return new Promise((resolve, reject) => {
      joi.validate(value, this.schema, this.options, (err, value) => {
        if (err) {
          return reject({
            validationError: true,
            details: err.details.map(d => d.message)
          })
        }

        resolve(value);
      });
    });
  }
}

module.exports = BaseValidator;