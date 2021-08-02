import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

class SendController {
  async sendEmail(req: Request, res: Response) {
    const { name, email, message } = req.body;
    const transport = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: 'kaiquehenrique.2005@outlook.com',
        pass: process.env.PASSWORD,
      },
    });

    transport.sendMail({
      sender: name,
      from: `${name}, <kaiquehenrique.2005@outlook.com>`,
      to: 'kaiquehenrique.2005@outlook.com',
      subject: `${name}, enviou uma mensagem`,
      text: `De: ${email}\n${message}`,
    })
      .then(() => {
        transport.close();
        return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
      })
      .catch((err) => {
        console.log(err);
        transport.close();
        return res.status(400).json('ERRO');
      });
  }
}

export default new SendController();
