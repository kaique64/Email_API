import { Router, Request, Response } from 'express';
import SendController from './controllers/SendController';

const route = Router();

route.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Seja bem-vindo!' });
});
route.post('/send', SendController.sendEmail);

export default route;
