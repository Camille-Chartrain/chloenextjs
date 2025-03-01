import nodemailer from 'nodemailer';

console.log("on est dans le controller de error_mail");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {


        try {

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: 'Error soumission mail site Chloé',
                html: emailContent,
            });
            // console.log("arrivés jusqu'après await transporter");

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email :', error);
            res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}
