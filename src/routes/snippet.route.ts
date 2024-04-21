const express = require('express');
import { Router } from 'express';

const verifyAuth = require('../middleware/verifyAuth.ts')
const snippetController = require('../controllers/snippet.controller');
const router: Router = express.Router();

router.get('/all', verifyAuth, snippetController.getColors)
router.post('/create', verifyAuth, snippetController.createSnippet)
router.delete('/delete/:id', verifyAuth, snippetController.deleteSnippet)

module.exports = router