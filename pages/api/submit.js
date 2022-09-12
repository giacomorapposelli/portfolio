const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

const handler = (req, res) => {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body
        res.status(201).json({ message: 'OK' })
        const text = `
                      Name: ${name}\r\n
                      Email: ${email}\r\n\
                      Message: ${message}\r\n\
                      `

        const msgDataLocal = {
            to: 'giacomo@rapposelli.org',
            from: `contact@giacomo-rapposelli.com`,
            subject: subject,
            text: text,
            html: text.replace(/\r\n/g, '<br>')
        }
        mail.send(msgDataLocal)
    } else {
        res.status(200).json({ status: 'Ok' })
    }
}

export default handler
