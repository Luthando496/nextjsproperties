"use server";

import Post from "@/models/Post";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import dataPosts from '@/data2.json' 

export const newUser = async () => {
  await connectDB();


  const user = await User.create({
    name: "John Doe",
    email: "doe@gmail.com",
    profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });


    // console.log(user);
};



export const newPost = async () => {
  await connectDB();

  dataPosts.map(async(data)=>{
    await Post.create({
     title: data.title,
       description: data.description,
       postImage: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
       tags: data.tags,
       category:data.category,
       author:data.author,
   
   });

  })



};




