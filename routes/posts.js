const express = require('express');
const router = express.Router();

const {dummy} = require('../controllers/Dummy')
const {createComment} = require('../controllers/CommentController');
const {createBlog, getBlogs} = require('../controllers/PostController')


router.get('/dummy', dummy);
router.post('/postComment', createComment)
router.post('/createBlog', createBlog )
router.get('/getBlogs', getBlogs)

module.exports = router;