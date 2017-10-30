const router = require('express').Router();
const appConfig = require('../config/app.config');
const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth-error');

router.all(/\/api\/(.*?)(?:\/|$)/, (req, res, next) => {
  const whiteListed = appConfig.whiteListedUrls.some((url) => {
    const path = req.params[0];
    return path.startsWith(url);
  });
  if (whiteListed) {
    return next();
  }

  const token = req.get(appConfig.authTokenHeaderName);
  if (!token) {
    return next(new AuthError('Authentication is failed. The authentication token is missing', 403));
  }

  jwt.verify(
    token,
    appConfig.auth.secretKey,
    (error, claims) => {
      if (error) {
        next(error);
      } else {
        req.claims = claims;
        next();
      }
    }
  );
});

module.exports = router;
