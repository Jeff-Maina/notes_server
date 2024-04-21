import { Request, Response } from "express";
import Bookmark from "../database/models/bookmark";
import User from "../database/models/user";

const BookmarkController = {
    getBookmarks: async (req: Request, res: Response) => {
        try {
            const user = (req as any).currentUser;
            const bookmarks = await Bookmark.findAll({ where: { userId: user.id } })
            res.send({ bookmarks: bookmarks })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    createBookmark: async (req: Request, res: Response) => {
        try {
            const user = (req as any).currentUser;

            // Extract necessary data from the request body
            const { websiteName, websiteImage, websiteDomain } = req.body;

            // Create the bookmark
            const bookmark = await Bookmark.create({
                userId: user.id,
                websiteName,
                websiteImage,
                websiteDomain
            });

            // Respond with a success message
            return res.status(201).json({ message: 'Bookmark successfully created', data: bookmark });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};


module.exports = BookmarkController