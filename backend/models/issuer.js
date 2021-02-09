const mongoose = require('mongoose');

// Issuerd model
const Issuer = mongoose.model('Issuer', mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100
  },
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 100
  },
  description: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50
  },
  src_small: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50
  },
  url_link: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50
  },
}));

module.exports = Issuer;