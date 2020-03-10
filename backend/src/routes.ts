import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('teste')
});


routes.get('/friends', UserController.show);
routes.post('/friends/new', UserController.store);
// routes.put('/friends/new', UserController.store);
// routes.delete('/friends/dele', UserController.store);
export default routes;