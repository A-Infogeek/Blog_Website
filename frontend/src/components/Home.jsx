import React, { useState, useEffect } from 'react'
import BlogSnippet from './BlogSnippet'

const Home = () => {
    const host = process.env.REACT_APP_SERVER_URL ;

    const [blogs, setBlogs] = useState([]);

    //Get all blogs
    useEffect(() => {
        // Get all blogs
        const getAllBlogs = async () => {
            // API Call
            const response = await fetch(`${host}/api/fetchallblogs`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const json = await response.json();
            setBlogs(json);
        }

        async function fetchBlogs() {
            await getAllBlogs();
        }

        fetchBlogs();
    }, [host]); // Include 'host' in the dependency array

    return (
        <div className='allblogs'>
            {blogs && blogs.map((blog) => {
                return <BlogSnippet blog={blog} />
            })}
        </div>
    )
}

export default Home