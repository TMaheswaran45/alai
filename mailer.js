const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: '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'
    }
}))

const send = ({ name, email, phone, subject, text }) => {

    const textBody = `Name: ${name}   
                Subject: ${subject}             
                Email: ${email}
                Phone: ${phone}
                Body: ${text}
                This email came from StartP React.js & Next.js template
                `

    const from = name && email ? `${name} <${email}>` : `${name || email}`

    const message = {
        from:email,
        to: 'rasik.hussain@alai-labs.com',
        subject: subject,
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

module.exports = send
