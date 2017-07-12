const joi = require('joi');

function validate(body) {
  return new Promise((resolve, reject) => {
    const schema = joi.object().keys({
      id: joi.number().min(1),
      name: joi.string().required().min(3),
      email: joi.string().email().required(),
      age: joi.number().required().min(18)
    });

    const options = {
      stripUnknown: true,
      abortEarly: false
    };

    joi.validate(body, schema, options, (err, value) => {
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


module.exports = validate;