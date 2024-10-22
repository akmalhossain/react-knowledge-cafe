import { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import PropTypes from "prop-types";


const Blog = ({handleAddToBookmark, handleMarkAsRead}) => {
    
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blog{blogs.length}</h2>
            {
                blogs.map(blog => <SingleBlog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}>
                </SingleBlog>)
            }

        </div>
    );
};
Blog.propTypes = {

    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
    
}
export default Blog;