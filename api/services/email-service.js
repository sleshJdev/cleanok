const Email = require('email-templates');
const appConfig = require('../config/app.config');

const email = new Email({
  message: {
    from: appConfig.email.from
  },
  transport: appConfig.email.transport
});

module.exports = {
  sendVerificationLetter: (to, params, onsuccess, onerror) => {
    return email.send({
      template: 'verification',
      message: {
        to: to
      },
      locals: params
    }).then(onsuccess).catch(onerror);
  }
};
