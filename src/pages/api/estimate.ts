import type { NextApiRequest, NextApiResponse } from 'next'

import { createTransport } from 'nodemailer';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body;
        const jsonData = JSON.parse(data);

        const transporter = createTransport({
            // @ts-ignore
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            //secure: process.env.MAIL_SECURE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: 'Gazella: Ny forespørgsel',
            text: `
En ny forespørgsel er kommet ind fra Estimeringssiden:

Navn: ${jsonData.name}
Firma: ${jsonData.companyName}
Email: ${jsonData.email}
Telefon: ${jsonData.tlf}
                
Type: ${jsonData.type}
Budget: ${jsonData.budget} kr.
Beskrivelse: ${jsonData.description}
`
        }, (err, info) => {

            if (err) {
                res.status(404).json({
                    error: `Connection refused at ${err.message}`
                });
            } else {
                res.status(200).json({
                    success: `Message delivered to ${info.accepted}`
                });
            }
        });
    }

    return res.status(404);
}