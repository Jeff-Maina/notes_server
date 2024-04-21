import { Request, Response } from "express"
import Snippet from "../database/models/snippet";

const Snippetcontroller = {
    getSnippets: async (req: Request, res: Response) => {
        try {
            const user = (req as any).currentUser;
            const snippets = await Snippet.findAll({ where: { userId: user.id } })
            res.send(snippets)
        } catch (error) {
            res.send({ error: "Internal server error" })
        }
    },
    createSnippet: async (req: Request, res: Response) => {

    },
    deleteSnippet: async (req: Request, res: Response) => {
        try {

        } catch (error) {
            res.send({ error: "Internal server error" })
        }
    }
}

module.exports = Snippetcontroller