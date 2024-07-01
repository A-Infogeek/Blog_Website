import express from "express";
import Blog from "../models/blog.js"

const router = express.Router();

router.get('/fetchallblogs', async (req, res) => {
    try {
        const blogs = await Blog.find({}).populate('author');
        res.status(200).json(blogs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error Occured");
    }
})

router.get('/blog/:blogId', async (req, res) => {
    try {
        const blogPost = await Blog.findById(req.params.blogId).populate('author');
        if (!blogPost) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blogPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Error Occured");
    }
})

export default router;