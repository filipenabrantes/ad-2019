import { Router } from 'express';
import UserController from './controllers/UserController';
import SortController from './controllers/SortController';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('teste')
});


routes.get('/friends', UserController.index);
routes.get('/friends/:id', UserController.show);
routes.post('/friends/new', UserController.store);
routes.post('/friends/sort', SortController.sortFriends)
// routes.put('/friends/new', UserController.store);
// routes.delete('/friends/dele', UserController.store);
export default routes;