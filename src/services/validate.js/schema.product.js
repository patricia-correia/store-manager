const Joi = require('joi');

const schemaValidation = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = schemaValidation;