'use strict'

const nodemailer = require('nodemailer');

function sendMails (target, subject, message){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'excavadm@gmail.com',
          pass: '12345poiuy' // naturally, replace both with your real credentials or an application-specific password
        }
      });
    
    const mailOptions = {
        from: 'excavadm@gmail.com',
        to: `e7nov12@gmail.com`,
        subject: subject,
        text: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

}

module.exports = sendMails;
