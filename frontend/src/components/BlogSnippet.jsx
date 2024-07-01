import { Link } from 'react-router-dom';

const BlogSnippet = ({ blog }) => {
    const truncateContent = (content, length) => {
        if (content.length <= length) return content;
        return content.substring(0, length) + '...';
    };


    return (
        <div className='blogcard'>
            <div className='heading'>
                <h4>{blog.title}</h4>
                <p>By {blog.author?.name}</p>
            </div>
            <div>
                <img src={blog.imageUrl} alt='img' className="blogImg" />
            </div>
            <div>
                <p>{truncateContent(blog.content, 150)}</p>
                <Link to={`/blog/${blog._id}`} className='read-more'>Read More</Link>
            </div>
        </div>
    )
}

export default BlogSnippet