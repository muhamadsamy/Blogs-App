"use client";
import Post from "@/components/Post";
import axios from "axios";
import React, { useEffect, useState } from "react";

function SinglePost({ params }) {
  const id = params.id;
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`).then((res) => {
      setPost(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [id]);

  return (

    <div className="Post" >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        {post.tags && post.tags.map((tag, index) => (
          <span key={index} className='text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2'>
            {tag}
          </span>
        ))}
      </div>
      <div>
        Reactions: {post.reactions}
      </div>
    </div>
  );
}

export default SinglePost;

