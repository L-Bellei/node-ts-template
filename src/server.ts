import express from 'express';
import { UserController } from '@controllers/UserController';

const app = express();

app.get('/', new UserController().teste);

app.listen(3030, () => console.log('running on port: 3030'));
