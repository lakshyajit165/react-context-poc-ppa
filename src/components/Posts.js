import React, { useState, useEffect } from 'react';
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Posts() {
    const { posts, loading, loadData } = useGlobalContext();
    useEffect(() => {
        loadData();
    })
    return (
        <div>
            <h2>Post Data</h2>
            { 
                loading ? <p>Loading...</p> : <></>
            }
            {
                posts ? posts.map(post => <p key={post.id}>{post.title}</p>) : <></>
            }
        </div>
    )
}
