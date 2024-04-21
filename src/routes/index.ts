import express, { Router } from "express";
const userRoute = require('./user.route')
const bookmarkRoute = require('./bookmark.route');

const router: Router = express.Router();

router.use('/users', userRoute)
router.use('/bookmarks', bookmarkRoute)

module.exports = router