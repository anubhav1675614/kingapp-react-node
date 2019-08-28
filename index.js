const express = require('express')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  // sgMail.setApiKey(process.env.REACT_APP_SENDGRID_APIKEY)
  sgMail.setApiKey("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")

  const htmlEmail = `
    <ul>
      <li>Name: ${req.body.username}</li>
      <li>Phone: ${req.body.userphone}</li>
      <li>Email: ${req.body.useremail}</li>
      <li>Comments: ${req.body.message}</li>
      <br>
      <li>Logo Location: ${req.body.hatLogoPos}</li>
      <br>
    </ul>
    <img src="blob:http://localhost:3000/06f4528b-d5de-4026-b582-27e01493d91c" alt="logoimage"></img>
  `
//    <img src=${req.body.hatLogoImage.preview} alt="logoimage"></img>

  console.log(req.body)

  const msg = {
    to: ['marcelwayne87@gmail.com'], //'sales@kingclothing.com',
    from: req.body.useremail,
    subject: 'Online Order Request',
    text: 'and easy to do anywhere, even with Node.js',
    html: htmlEmail
  }
  sgMail.send(msg)
  res.send('{"message":"Email sent."}');
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listing on port ${PORT}`)
})