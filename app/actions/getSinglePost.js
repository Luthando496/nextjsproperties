"use server"

import Post from "@/models/Post";
import connectDB from "@/utils/connectDB";


const getSinglePost = async (id) => {
    await connectDB();
    const title = id.split("-").join(" ");
    
    const post = await Post.findOne({title:{'$regex': title,$options:'i'}}).populate("author");
    if(!post) return null;
    return post;
}

export default getSinglePost;