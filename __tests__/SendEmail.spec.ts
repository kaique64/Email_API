import request from 'supertest';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
import app from '../src/app';

config();

describe('Send email', () => {
  it('should send email', async () => {
    nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: 'kaiquehenrique.2005@outlook.com',
        pass: process.env.PASSWORD,
      },
    });

    const response = await request(app)
      .post('/send')
      .send({
        name: 'Kaique',
        email: 'kaiquehenrique.2005@outlook.com',
        message: 'Olá',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
  });
});
