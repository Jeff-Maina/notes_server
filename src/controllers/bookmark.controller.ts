import { Request, Response } from "express";
import Bookmark from "../database/models/bookmark";
import User from "../database/models/user";
import Tag from "../database/models/tag";

const BookmarkController = {
    getBookmarks: async (req: Request, res: Response) => {
        try {
            const user = (req as any).currentUser;
            const bookmarks = await Bookmark.findAll({ where: { userId: user.id }, include: [Tag] })
            res.send({ bookmarks: bookmarks })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    createBookmark: async (req: Request, res: Response) => {
        try {
            const user = (req as any).currentUser;

            const { websiteName, websiteImage, websiteDomain, tags } = req.body;
            const bookmark = await Bookmark.create({
                userId: user.id,
                websiteName,
                websiteImage,
                websiteDomain
            });

            // Check if tags are provided in the request body
            if (tags && tags.length > 0) {
                // Find or create each tag and associate it with the bookmark
                for (const tagName of tags) {
                    const [tag, created] = await Tag.findOrCreate({ where: { name: tagName } });
                    await bookmark.$add('tags', tag);
                }
            }

            // Respond with a success message
            return res.status(201).json({ message: 'Bookmark successfully created', data: bookmark });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    deleteBookmark: async (req: Request, res: Response) => {
        try {
            const bookmark = await Bookmark.findOne({ where: { id: req.params.id } })


            if (!bookmark) {
                res.send({ message: "Bookmark not found", id: req.params.id })
                return
            }

            await bookmark.$get('tags');
            await bookmark.$set('tags', []);

            // Delete the bookmark
            await bookmark.destroy();

            res.send({ message: "Bookmark successfully deleted" })
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });

        }
    }
};


module.exports = BookmarkController