const Joi = require('joi');

// Issuer validator
function validateIssuer(issuer) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    title: Joi.string().min(5).max(100).required(),
    description: Joi.string().required(),
    src: Joi.string().min(5).max(50).required(),
    src_small: Joi.string().min(5).max(50).required(),
    url_link: Joi.string().min(5).max(50).required(),
  });

  return schema.validate(issuer);
}

// Exports
exports.validateIssuer = validateIssuer;