const jwt = require('jsonwebtoken');
const config = require('../config/config');

function signin(user) {
  const token = jwt.sign(user, config.app.authSecretKey);
  return token;
}

module.exports = {
  signin,
};
