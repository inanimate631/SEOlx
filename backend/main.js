const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const emailData = req.body;
  const transporter = nodemailer.createTransport({
    port: '465',
    service: 'gmail',
    auth: {
      user: 'testinanimate@gmail.com', 
      pass: 'dlbqqtjlpxjevqcn' 
    }
  });
  const mailOptions = {
    from: 'new <testinanimate@gmail.com>', 
    to: 'inanmate631@gmail.com',
    subject: 'qwewqe',
    text: JSON.stringify(emailData.message)
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email sending failed');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});