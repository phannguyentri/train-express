const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
let db = require('../db');

router.get('/', controller.index);
router.get('/search', controller.search);

router.get('/create', controller.createGet);

router.post('/create', controller.createPost);

router.get('/:id', controller.view);

module.exports = router;