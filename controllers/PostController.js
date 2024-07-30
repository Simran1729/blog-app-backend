const Post = require('../models/Post')

exports.createBlog = async (req, res) => {
    try {
        const {title, content} = req.body;
        const postCreated = await Post.create({title, content});
        res.status(200).json({
            success: true,
            response : postCreated,
            message : "Creation successful"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            response : err.message,
            message : "Creation failed"  
        })
    }
}


exports.getBlogs = async (req, res) => {
    try{
        const posts = await Post.find().populate("comments").exec();
        res.status(200).json({
            posts : posts
        })
    }
    catch(err){
        res.status(500).json({
            success : false,
            messgae : "Error fetching posts",
            error : err.message
        })
    }
}