import mongoose from "mongoose";
import express from "express";
import blogRoutes from "./routes/blog.js"
import cors from "cors";
import dotenv from "dotenv";

/* DATA IMPORTS */
import {authors,blogs} from "./data/index.js"
import Author from "./models/author.js"
import Blog from "./models/blog.js"

/* CONFIGURATION */
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

/* ROUTES SETUP */
app.use("/api",blogRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        /* ONLY ADD DATA ONE TIME */
        // Author.insertMany(authors);
        // Blog.insertMany(blogs);
    })
    .catch((error) => console.log(`${error} did not connect`));
