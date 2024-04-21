const express = require('express');
import { Router } from 'express';

const verifyAuth = require('../middleware/verifyAuth.ts')
const bookmmarkController = require('../controllers/bookmark.controller');
const router: Router = express.Router();

router.get('/all', verifyAuth, bookmmarkController.getBookmarks)
router.post('/create', verifyAuth, bookmmarkController.createBookmark)
router.delete('/delete/:id', verifyAuth, bookmmarkController.deleteBookmark)

module.exports = router