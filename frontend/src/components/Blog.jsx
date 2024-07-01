import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

const Blog = () => {
    const host = process.env.REACT_APP_SERVER_URL;
    const blogId = useParams();
    const [paragraphs, setParagraphs] = useState([]);
    const [blog, setBlog] = useState([]);
    const shareUrl = window.location.href; // URL of the current page


    //Get specific blog
    const getBlog = useCallback(async () => {
        // API Call
        const response = await fetch(`${host}/api/blog/${blogId.blogId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        setBlog(json);
    }, [blogId, host]); // Memoize the function with blogId and host as a dependency

    useEffect(() => {
        async function fetchBlog() {
            await getBlog();
        }
        fetchBlog();
    }, [getBlog]); // Include getBlog as a dependency

    useEffect(() => {

        // Split the content by new lines (or another delimiter of your choice)
        if (blog && blog.content) {
            const parsedParagraphs = blog.content.split('\n').filter(paragraph => paragraph.trim() !== '');
            setParagraphs(parsedParagraphs);
        }
    }, [blog])

    return (
        <div className='blogPost'>
            <div className='heading center'>
                <h4>{blog.title}</h4>
            <div className='authorDetails'>
                <p>By {blog.author?.name}</p>
                <a href={blog.author?.linkedinUrl} target="_blank" rel="noreferrer"><LinkedinIcon size={32} round /></a>
            </div>
            </div>
            <div className='image'>
                <img src={blog.imageUrl} alt='img' className="blogImg" />
            </div>
            <div>
                {paragraphs && paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className='sharing'>
                <p>Share on: </p>
                <div className='share-buttons'>
                    <FacebookShareButton url={shareUrl} quote={blog.title}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={blog.title}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl} title={blog.title} summary={blog.content}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
            </div>

        </div>
    )
}

export default Blog
