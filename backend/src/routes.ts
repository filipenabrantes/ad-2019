import { Router } from 'express';

const routes = Router();

routes.get('/friends', (req, res) => {
    return res.send('retornando todos os amigos');
});

routes.post('/friends/new', (req, res) => {
    return
});


export default routes;