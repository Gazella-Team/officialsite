import type { NextApiRequest, NextApiResponse } from 'next'

import { createTransport } from 'nodemailer';

const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    //secure: process.env.MAIL_SECURE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const data = req.body;
        const jsonData = JSON.parse(data);

        console.log(jsonData);

        transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: 'Gazella: Ny forespørgsel',
            text:
                `
En ny forespørgsel er kommet ind fra Estimeringssiden:

Navn: ${jsonData.name}
Firma: ${jsonData.companyName}
Email: ${jsonData.email}
Telefon: ${jsonData.tlf}
                
Type: ${jsonData.type}
Budget: ${jsonData.budget} kr.
Beskrivelse: ${jsonData.description}
`
        });

        return res.status(200).json({ message: 'Forespørgsel sendt' });
    }

    return res.status(404);
}