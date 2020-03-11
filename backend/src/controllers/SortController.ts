import { Request, Response } from 'express';
import { User } from '../models/User';

class SortController {

    public async sortFriends(req: Request, res: Response) {
        const users = await User.find().exec()

        const arrayLength = users.length
        let arraySorteds: Number[] = []
        let numSorted
        let count = 0

        while (arraySorteds.length < arrayLength) {
            numSorted = Math.floor(Math.random() * arrayLength);

            if (!arraySorteds.includes(numSorted)) {
                if (users[numSorted].name != users[count].name) {
                    users[count].friend = users[numSorted].name
                    arraySorteds.push(numSorted)
                    count++
                }
            }
        }
        console.log(users);

        res.json(users)
    }
}

export default new SortController()