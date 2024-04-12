import { Router } from 'express';
const express = require('express');

const userController = require('../controllers/user.controller');
const router: Router = express.Router();

router.get('/all', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.post('/register', userController.createUser)

module.exports = router;