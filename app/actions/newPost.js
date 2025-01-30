"use server";

import Post from "@/models/Post";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import dataPosts from '@/data2.json' 
import { redirect } from "next/navigation";
import { tagNames } from "@/utils/tagNames";
import { revalidatePath } from "next/cache";

export const newUser = async () => {
  await connectDB();


  const user = await User.create({
    name: "John Doe",
    email: "doe@gmail.com",
    profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });


    // console.log(user);
};



export const newPost = async (data) => {
  await connectDB();
  try{
   const post=  await Post.create(data);
    console.log("Post created");
    revalidatePath('/posts/add-post','layout')
    redirect(`/posts/${tagNames(post.title)}`)


  }
  catch(err){
    console.log(err,"error");
  }
};




