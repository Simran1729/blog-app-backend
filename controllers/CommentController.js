const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try{
        const {post, user, content} = req.body;
        //create the object first
        const comment = new Comment ({post, user, content});
        //now save it
        const savedComment = await comment.save();

        //now we want to update the post schema  
        const updatedPost =  await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}}, {new : true} )
                                .populate("comments").exec();

        res.status(200).json({
            post : updatedPost
        })
    } catch (err) {
        res.status(500).json({
            error : "error posting comment"
        })
    }
}