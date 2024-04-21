const express = require('express');
import { Router } from 'express';

const verifyAuth = require('../middleware/verifyAuth.ts')
const bookmarkController = require('../controllers/bookmark.controller');
const router: Router = express.Router();

router.get('/all', verifyAuth, bookmarkController.getBookmarks)
router.post('/create', verifyAuth, bookmarkController.createBookmark)
router.delete('/delete/:id', verifyAuth, bookmarkController.deleteBookmark)

module.exports = router