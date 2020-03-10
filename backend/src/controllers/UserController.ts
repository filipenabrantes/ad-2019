import { Request, Response } from 'express';
import { User } from '../models/User';

class UserController {
    public async store(req: Request, res: Response) {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        });

        try {
            await user.save();
        } catch (error) {
            console.log('deu erro');
        }
    }

    public async show(req: Request, res: Response) {

        const users = await User.find().exec();

        if (!users) {
            console.log('erro ao consultar os usuários');
            return;
        }
        res.json(users)
    }

    public async update(req: Request, res: Response) {

        const { id, name, email } = req.body
        await User.findByIdAndUpdate({ id }, { $set: { name, email } })
    }

    public async destroy(req: Request, res: Response) {
        const userFound = await User.findOne({ name: req.body.name });

        if (!userFound) {
            console.log('usuario nao encontrado');
        }
        await User.deleteOne({ userFound })
    }
}

export default new UserController();
