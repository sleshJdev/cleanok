const appConfig = {
  whiteListedUrls: ['login'],
  secretKey: 'GJVXPODXa3zHdr1RU2Na3EGqA1jTfpxV',
  persistence: {
    mongo: {
      url: 'mongodb://127.0.0.1:27017/cleanok'
    }
  }
};

module.exports = appConfig;
