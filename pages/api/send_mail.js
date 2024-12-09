import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'camille.chartrain@gmail.com',
        pass: 'Salade2bonbons',
    },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { to, subject, text } = req.body;

        try {
            await transporter.sendMail({
                from: 'camille.chartrain@gmail.com',
                to,
                subject,
                text,
            });
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email', details: error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}
