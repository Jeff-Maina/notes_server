import { Request, Response } from "express"
import { } from "sequelize"
import User from "../database/models/user"

const bcrypt = require("bcrypt")
const saltRounds = 10;

const UserController = {
    getUsers: async (req: any, res: any) => {
        const users = await User.findAll().then(users => {
            console.log(users)
        });
        res.send(users)
    },
    getOneUser: async (req: Request, res: Response) => {
        res.send('hello from user one user')
    },
    createUser: async (req: Request, res: Response) => {
        const { password, email } = req.body
        try {
            const hashed_password = await bcrypt.hash(password, saltRounds)
            const user = await User.create({
                email,
                password: hashed_password
            });
            return res.status(201).json({ message: 'User created successfully', user });
        } catch (err: any) {
            return res.status(500).json({ error: err.errors });
        }
    }


}

module.exports = UserController