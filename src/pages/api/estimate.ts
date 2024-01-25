import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

import { createTransport } from 'nodemailer';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body;
        const jsonData = JSON.parse(data);

        await axios.post("https://api.brevo.com/v3/smtp/email",
            {
                sender: {
                    "email": "lasse@gazellateam.com",
                    "name": "Lasse"
                },
                subject: `Ny forespørgsel fra ${jsonData.companyName || jsonData.name}`,
                templateId: 1,
                params: {
                    "name": jsonData.name,
                    "companyName": jsonData.companyName,
                    "email": jsonData.email,
                    "tlf": jsonData.tlf,
                    "type": jsonData.type,
                    "budget": jsonData.budget[0],
                    "description": jsonData.description
                },
                to: [
                    {
                        "email": "lasse@gazellateam.com",
                        "name": "Lasse"
                    }
                ],
            },
            {
                headers: {
                    "accept": "application/json",
                    "content-type": "application/json",
                    "api-key": `${process.env.BREVO_API_KEY}`,
                },
            }
        ).then((response) => {
            return res.status(200).json({
                success: `Message delivered` // `Message delivered to ${info.accepted}`
            });
        })
            .catch((error) => {
                return res.status(404).json({
                    error: `Error occurred` //`Connection refused at ${err.message}`
                });
            });

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

        /*transporter.sendMail({
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
                return res.status(404).json({
                    error: `Error occurred` //`Connection refused at ${err.message}`
                });
            } else {
                return res.status(200).json({
                    success: `Message delivered` // `Message delivered to ${info.accepted}`
                });
            }
        });*/
    }

    return res.status(404);
}