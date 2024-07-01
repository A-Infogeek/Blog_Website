import mongoose, { Schema, model } from "mongoose";

const blogSchema= new Schema({
    title: {
        type: String,
        required: true
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;