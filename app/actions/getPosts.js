"use server"

import Post from "@/models/Post";
import connectDB from "@/utils/connectDB";


const getPosts = async () => {
    await connectDB();
    
    const posts = await Post.find({}).populate("author").sort({ createdAt: -1 }).limit(5);
    if(!posts) return [];
    return posts;
}

export default getPosts;

