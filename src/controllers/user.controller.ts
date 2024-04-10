import { Request, Response } from "express"

const UserController = {
    getUsers: async (req: any, res: any) => {
        res.send('hello from users')
    },
    getOneUser: async (req: Request, res: Response) => {
        res.send('hello from user one user')
    }
}

module.exports = UserController