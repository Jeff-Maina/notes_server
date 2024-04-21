const express = require('express');
import { Router } from 'express';

const verifyAuth = require('../middleware/verifyAuth.ts')
const colorController = require('../controllers/color.controller');
const router: Router = express.Router();

router.get('/all', verifyAuth, colorController.getColors)
router.post('/create', verifyAuth, colorController.createColor)
router.delete('/delete/:id', verifyAuth, colorController.deleteColor)

module.exports = router