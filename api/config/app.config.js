const appConfig = {
  authTokenHeaderName: 'X-Auth-Token',
  whiteListedUrls: ['sign-in', 'sign-up'],
  email: {
    from: 'havecleanok@gmail.com',
    transport: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'havecleanok@gmail.com',
        pass: '7fcaed6afbd25536514fda8efe4fe509e29bc28dc5e4618312a6b11e1df80566f75696ec0b2b5841eb8a2da7a60067af5d0d'
      }
    }
  },
  auth: {
    verificationUrl: 'http://localhost:3000/api/sign-up/verification/email',
    secretKey: 'GJVXPODXa3zHdr1RU2Na3EGqA1jTfpxV',
    jwtOptions: {
      expiresIn: 8 * 60 * 60
    }
  },
  persistence: {
    mongo: {
      url: 'mongodb://127.0.0.1:27017/cleanok'
    }
  }
};

module.exports = appConfig;
