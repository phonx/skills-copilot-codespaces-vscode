// Create web server

// Import modules   
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');

// Create a comment
router.post('/', async (req, res) => {
    const comment = new Comment({
        content: req.body.content,

        // Get the post id from the url
        post: req.body.postId
    });

    // Save the comment
    await comment.save();

    // Find the post

    // Find the post by id

    // Add the comment to the post

    // Save the post

    // Redirect to the post
    res.redirect(`/posts/${req.body.postId}`);
});