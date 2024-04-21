import { Router } from 'express';
const express = require('express');

const userController = require('../controllers/user.controller');
const router: Router = express.Router();
const verifyAuth = require('../middleware/verifyAuth.ts')

router.get('/all', verifyAuth, userController.getUsers)
router.get('/user', verifyAuth, userController.getCurrentUser)
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)

module.exports = router;