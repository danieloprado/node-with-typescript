import * as joi from 'joi';

import { IUser } from '../interfaces/user';

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

export default function validate(body: any): Promise<IUser> {
  return new Promise((resolve, reject) => {
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