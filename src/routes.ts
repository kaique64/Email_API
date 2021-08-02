import { Router } from 'express';
import SendController from './controllers/SendController';

const route = Router();

route.post('/send', SendController.sendEmail);

export default route;
