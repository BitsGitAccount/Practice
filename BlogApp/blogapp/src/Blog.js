import React, { useState } from "react";

function Blog() {
    const [posts,setPosts] = useState([]);
    const [title,setTitle] = useState("");

    const addPost = () => {
        if(title.trim() === "") return;

        const newPost = {
            id: Date.now(),
            title: title
        }

        setPosts([newPost, ...posts]);
        setTitle("");
    }

    const deletePost = (id) => {
        const updatedPosts = posts.filter(post=>post.id!==id);
        setPosts(updatedPosts)
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="enter a post"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <button onClick={addPost}>Add</button>

            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title} <button onClick={() => deletePost(post.id)}>Delete</button></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Blog;