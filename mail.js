const nodemailer = require('nodemailer');

async function sendMail(){
  try{
    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "<<user from mailtrap>>",
        pass: "<<pass from mailtrap>>"
      }
    });

    const mailOptions = {
      from : 'Arif Luthfi 😯 <arifluthfi16@gmail.com>',
      to : 'arifluthfi16.gtest@gmail.com',
      subject : 'Email Scheduler',
      text : 'Hello from spambot',
      html : '<h1>Email scheduler</h1>'
    }

    const result = await transport.sendMail(mailOptions);
    return result
  }catch(error){
    return error
  }
}

module.exports = sendMail;