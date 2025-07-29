const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/blogs', blogController.getBlogList);
router.get('/blogs/:filename', blogController.getBlogContent);

module.exports = router;