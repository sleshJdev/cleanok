const Email = require('email-templates');
const appConfig = require('../config/app.config');

const email = new Email({
  message: {
    from: appConfig.email.from
  },
  transport: appConfig.email.transport
});

module.exports = {
  sendVerificationLetter: (user, token) => {
    return email.send({
      template: 'verification',
      message: {
        to: user.email
      },
      locals: {
        name: user.name,
        url: `${appConfig.auth.verificationUrl}?token=${token}`
      }
    });
  }
};
