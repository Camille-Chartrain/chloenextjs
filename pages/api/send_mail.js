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

            const emailContent = `
            <h1>Nouvelle demande de devis</h1>
            <p><strong>Nom :</strong> ${otherData.lastname}</p>
            <p><strong>Email :</strong> ${otherData.email}</p>
            <p><strong>Téléphone :</strong> ${otherData.telephone}</p>
            
            <p><strong>Adresse :</strong> ${otherData.adresse}</p>
            <p><strong>Etage :</strong> ${otherData.etage}</p>
            <p><strong>Ascenseur : </strong> ${otherData.ascenseur}</p>
            <p><strong>Parking : </strong> ${otherData.parking}</p>
            <p><strong>Date souhaitée : </strong> ${otherData.date}</p>

            <p><strong>Autre support mur:</strong> ${otherData.autre_support_murs} </p>
            <p><strong>Autre support plafonds:</strong> ${otherData.autre_support_plafonds} </p>
            <p><strong>Autre support sols:</strong> ${otherData.autre_support_sols} </p>

            <p><strong>Surface murs : ${otherData.surface_mur}</strong></p>
            <p><strong>Surface plafonds : ${otherData.surface_plafond}</strong></p>
            <p><strong>Surface sols : ${otherData.surface_sol}</strong></p>

            <p><strong>Message : ${otherData.message}</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>
            <p><strong> :</strong></p>


        `;



            await transporter.sendMail({
                from: 'camille.chartrain@gmail.com',
                to: otherData.email,
                subject: 'Demande de devis',
                html: emailContent,
            });
            console.log("arrivés jusqu'après await transporter");

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
