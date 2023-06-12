const nodemailer = require('nodemailer');
const express = require('express')

const router = express.Router()


router.post('/send-email', (req, res) => {
    const { subject, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yanjish.hellscream@gmail.com',
        pass: 'beutpkcwmduznqmk',
      },
    });
  
    const mailOptions = {
      from: 'yanjish.hellscream@gmail.com',
      to: 'nodeapp6@gmail.com',
      subject: subject,
      text: message,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('the mailnot senr:', error);
        res.send('Error');
      } else {
        console.log('Email sent susccesfully:', info.response);
        res.send('Email sent successfully');
      }
    });
  });
  

module.exports = router
