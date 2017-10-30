const util = require('util');

function AuthError(message, status) {
  this.message = message;
  this.status = status || 401;
}
util.inherits(AuthError, Error);
AuthError.prototype.name = 'AuthError';

module.exports = AuthError;
