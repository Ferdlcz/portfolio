const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors');



const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ferdlcskate@gmail.com',
        pass: 'hrngapszvyetiwqx'
      }
    })
    
    const mailOptions = {
      from: email,
      to: 'ferdlcskate@gmail.com',
      subject: `Mensaje de ${name} enviado desde tu sitio web`,
      text: message,
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        res.status(500).send('Error al enviar el mensaje')
      } else {
        console.log('Mensaje enviado: ' + info.response)
        res.status(200).send('Mensaje enviado')
      }
    })
  })
  
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`)
})