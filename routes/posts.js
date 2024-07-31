const express = require('express');
const router = express.Router();

const {dummy} = require('../controllers/Dummy')
const {createComment} = require('../controllers/CommentController');
const {createBlog, getBlogs} = require('../controllers/PostController')
const {likePost, unlikePost} = require('../controllers/LikeController');

router.get('/dummy', dummy);
router.post('/postComment', createComment)
router.post('/createBlog', createBlog )
router.get('/getBlogs', getBlogs)
router.post('/likePost', likePost )
router.post('/unlikePost', unlikePost)

module.exports = router;