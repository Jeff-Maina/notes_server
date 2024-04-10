import {  Router } from 'express';
const express = require('express');

const userController = require('../controllers/user.controller');
const router: Router = express.Router();

router.get('/users', userController.getUsers)
router.get('/users/:id', userController.getOneUser)

module.exports = router;