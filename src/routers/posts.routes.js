const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller');

router.get('/', (req, res) => {
  res.send('Fetching all blog posts from the modular router!');
});

router.get('/:postId', postController.getPostById);


module.exports = router;
