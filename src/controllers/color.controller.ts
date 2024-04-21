import { Request, Response } from "express"
import Color from "../database/models/color"
import { userInfo } from "os"
import User from "../database/models/user";

const Colorcontroller = {
    getColors: async (req: Request, res: Response) => {
        try {
            const user = (req as any).currentUser;
            const colors = await Color.findAll({ where: { userId: user.id } })

            res.send(colors)
        } catch (error) {
            res.send({ error: "Internal server error" })
        }
    },
    createColor: async (req: Request, res: Response) => {

    },
    deleteColor: async (req: Request, res: Response) => {
        try {

        } catch (error) {
            res.send({ error: "Internal server error" })
        }
    }
}

module.exports = Colorcontroller