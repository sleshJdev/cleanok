const util = require("util");

function HttpError(message, status) {
  this.message = message;
  this.status = status || 500;
}

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

module.exports = HttpError;
