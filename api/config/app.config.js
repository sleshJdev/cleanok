const appConfig = {
  authTokenHeaderName: 'X-Auth-Token',
  whiteListedUrls: ['login'],
  auth: {
    secretKey: 'GJVXPODXa3zHdr1RU2Na3EGqA1jTfpxV',
    jwtOptions: {
      expiresIn: 5 * 60//seconds
    }
  },
  persistence: {
    mongo: {
      url: 'mongodb://127.0.0.1:27017/cleanok'
    }
  }
};

module.exports = appConfig;
