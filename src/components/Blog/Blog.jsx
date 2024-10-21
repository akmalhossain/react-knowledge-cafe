import { useEffect, useState } from "react";


const Blog = () => {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blog{blogs.length}</h2>
        </div>
    );
};

export default Blog;