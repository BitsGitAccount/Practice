import React, { useEffect, useState } from "react";

function OnlinePosts () {
    const [post,setpost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            setpost(data.slice(0,3));
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        });
    },[]);

    return(
        <div>
            {post.map(post => (
                <div key={post.id} style={{marginBottom: "15px"}}>
                    <h3>
                        {post.title}
                    </h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default OnlinePosts;