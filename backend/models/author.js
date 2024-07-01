import mongoose, { Schema, model } from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    linkedinUrl: {
      type: String,
      required: true
    }
  });
  
  const Author = mongoose.model('Author', authorSchema);
  
  export default Author;