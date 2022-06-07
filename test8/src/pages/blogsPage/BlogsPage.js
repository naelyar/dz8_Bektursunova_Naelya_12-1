import { Link } from "react-router-dom";
import React from "react";
const BlogsPage =() => {
    return (
        <div>
            <h1>blogsPage</h1>
            <ul>
                <li>
                    <Link to ="/blogs/news1" state={{name:"news1"}}>news1</Link>
                </li>
                <li>
                    <Link to ="/blogs/news2">news2</Link>
                </li>
               
            </ul>
        </div>
    )
}

export default BlogsPage;