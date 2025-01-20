"use server"

import Post from "@/models/Post";
import connectDB from "@/utils/connectDB";


const getPosts = async () => {
    await connectDB();
    
    const posts = await Post.find({}).populate("author");
    if(!posts) return [];
    console.log(posts)
    return posts;
}

export default getPosts;

