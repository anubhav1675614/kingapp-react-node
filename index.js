const express = require('express')
const bodyParser = require('body-parser')

const sgMail = require('@sendgrid/mail');
const app = express()

// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  sgMail.setApiKey(env.SENDGRID_APIKEY)

  let productsEmail = ''
  for (const item of req.body.products) {
    const str = `<li>${item.value} ${item.name}</li>`
    productsEmail += str
  }

  const imageb64 = req.body.hatLogoImage.replace('data:image/png;base64,', '');

  const htmlEmail = `
    <ul>
      <li>Name: ${req.body.username}</li>
      <li>Phone: ${req.body.userphone}</li>
      <li>Email: ${req.body.useremail}</li>
      <li>Comments: ${req.body.message}</li>
      <br>
      <li>Logo Location: ${req.body.hatLogoPos}</li>
      <br>
      ${productsEmail}
    </ul>
    <img src="cid:myimagecid"/>
  `

  const msg = {
    to: ['sales@kingclothing.com'],
    from: req.body.useremail,
    subject: 'Online Order Request',
    html: htmlEmail,
    attachments: [
      {
        filename: "hatlogo.png",
        content: imageb64,
        content_id: "myimagecid",
      }
    ]
  }
  sgMail.send(msg)
  res.send('{"message":"Email sent."}');
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listing on port ${PORT}`)
})