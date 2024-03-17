const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'https://webdevelop.cz')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	res.setHeader('Access-Control-Allow-Credentials', 'true')
	next()
})

app.post('/send-email', (req, res) => {
	const { name, email, message } = req.body

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	})

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: 'Feedback Form Submission',
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			res.status(500).send({ ok: false, code: 500, error: error, message: 'Email not sent!' })
		} else {
			res.status(200).send({ ok: true, code: 200, message: 'Email sent successfully' })
		}
	})
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
