"use server"

import Post from "@/models/Post";
import connectDB from "@/utils/connectDB";


const getSinglePost = async (id) => {
    await connectDB();
    
    const post = await Post.findById(id).populate("author");
    if(!post) return null;
    console.log(post,"SINGLE POST")
    return post;
}

export default getSinglePost;