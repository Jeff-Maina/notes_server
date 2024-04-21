import { Request, Response } from "express"
import { } from "sequelize"
import User from "../database/models/user"
import { isEmpty } from "validator";
import Utils from "../helpers/utils"
const jwt = require("jsonwebtoken");


const bcrypt = require("bcrypt")
const saltRounds = 10;

const UserController = {
    getUsers: async (req: any, res: any) => {
        const users = await User.findAll()
        res.send(users)
    },
    getCurrentUser: async (req: Request, res: Response) => {
        try {
            const user = await User.findOne({ where: { email: req.body.email } });
            res.json(user);
        } catch (e) {
            res.send({ message: "Error in Fetching user" });
        }
    },
    createUser: async (req: Request, res: Response) => {
        const { password, email } = req.body
        try {
            const hashed_password = await bcrypt.hash(password, saltRounds)
            const user = await User.create({
                email,
                password: hashed_password
            });

            const token = Utils.generateJWT(
                {
                    email: user.email,
                    userId: user.id
                }
            );

            return res.status(201).json({ message: 'User created successfully', user, token });
        } catch (err: any) {
            return res.status(500).json({ error: err.errors });
        }
    },
    loginUser: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (isEmpty(email) || isEmpty(password)) {
            return res.status(400).send("Email or password is empty");
        }

        try {
            const user = await User.findOne({ where: { email: email } });

            if (!user) {
                return res.status(404).send({ error: "User does not exist." });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Authentication failed' });
            }

            const token = Utils.generateJWT(
                {
                    email: user.email,
                    userId: user.id
                }
            );


            res.send({ message: user, token });
        }
        catch (error) {
            // Access Denied
            return res.status(401).send({ error: error, message: "not authorized" });
        }


    }


}

module.exports = UserController