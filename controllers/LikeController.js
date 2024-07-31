const Post = require('../models/Post');
const Like = require('../models/Like');

exports.likePost = async(req, res) => {
    try{
        const {post, user} = req.body;
        const like  = new Like ({post, user});
        
        const updatedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes : updatedLike._id}}, {new : true})
                                    .populate("likes").exec();

        res.status(200).json({
            success: true,
            message : "Post liked",
            post : updatedPost
        })
    } catch(err) {
        res.status(500).json({
            error : "error liking post",
            message : err.message
        })
    }
}

exports.unlikePost = async(req, res) => {

    try{
        const {post, user} = req.body;

        const likeToRemove = await Like.findOne({post : post, user : user})
        
        if(!likeToRemove){
            res.status(404).json({
                success: false,
                message : "You haven't yet liked the post"
            })
        }

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull : {likes : likeToRemove._id}} , {new : true})
                                        .populate("likes").exec();
    
        res.status(200).json({
                    success: true,
                    message : "Post unliked",
                    post : updatedPost
                })  

    }catch(err){
        res.status(500).json({
            error : "error unliking post",
            message : err.message
        })
    }          
                                    
}