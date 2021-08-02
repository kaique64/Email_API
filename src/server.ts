import { config } from 'dotenv';
import app from './app';

config();

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log('Server is running on port http://localhost:5000');
});
