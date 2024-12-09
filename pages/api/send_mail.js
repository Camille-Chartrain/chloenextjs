import nodemailer from 'nodemailer';

console.log("on est dans le controller de semd_mail");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { prestations, ...otherData } = req.body;
        // console.log(otherData)
        // console.log("otherData.email", otherData.email)
        // console.log("req.body", req.body)
        console.log('avant le try transporter send mail');


        try {
            console.log('dans le try');

            await transporter.sendMail({
                from: 'camille.chartrain@gmail.com',
                to: otherData.email,
                subject: 'Votre demande de devis',
                text: "rien pour le moment",
            });
            console.log("arrivés jusqu'après await transporter");

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email', details: error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}
