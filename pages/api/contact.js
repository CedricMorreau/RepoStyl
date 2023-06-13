import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
    const { name, email, message } = req.body;

    const user = process.env.user;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.pass
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "cedricmorreau@gmail.com",
            replyTo: email,
            subject: `contact form submissions from ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        });

        console.log("message sent:", mail.messageId);

        return res.status(200).json({ message: "succes" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "could not send the email. Please try again later" })
    }
}