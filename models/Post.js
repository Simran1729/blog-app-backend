const mongoose = require('mongoose');

const Post = new mongoose.Schema (
    {
        title : String,
        content : String 
    }
)