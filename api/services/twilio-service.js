const Twilio = require('twilio');
const appConfig = require('../config/app.config');

const client = new Twilio(appConfig.twilio.sid, appConfig.twilio.secret);

module.exports = {
  sendVerificationCode: (to, code) => {
    return client.messages.create({
      body: `Your CleanOK verification code is: ${code}`,
      to: to,
      from: appConfig.twilio.from
    });
  }
};
