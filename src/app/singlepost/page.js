"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import Post from "@/components/Post";
import { useParams } from "next/navigation";




function SinglePost() {
    const {id}= useParams();

   
    const [post, setPost] = useState([]);

    useEffect(()=>{
    axios.get(`https://dummyjson.com/posts/${post.id}`).then(({data})=>{
        setPost(data);
        console.log(data);

       
    })
    .catch((error)=>{
        console.log(error)
    })
    if(!post){
        return <div>loading...</div>
    }

 },[id]);
    return (
        <div className="Post">    
            
        </div>
        );
}


export default SinglePost;