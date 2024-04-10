import express, { Router } from "express";
const userRoute = require('./user.route')

const router: Router = express.Router();

router.use('/', userRoute)

module.exports = router