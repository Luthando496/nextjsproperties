// "use server";

import { supabase } from "@/utils/connectDB";

// import Post from "@/models/Post";
// import User from "@/models/User";
// import connectDB from "@/utils/connectDB";
// import dataPosts from '@/data2.json' 
// import { redirect } from "next/navigation";
// import { tagNames } from "@/utils/tagNames";
// import { revalidatePath } from "next/cache";

// export const newUser = async () => {
//   await connectDB();


//   const user = await User.create({
//     name: "John Doe",
//     email: "doe@gmail.com",
//     profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   });


// };



export const newPost = async (myData) => {
  try {
    const {data,error} = await supabase.from('post').insert([myData]).select();
    console.log("Post created, ",data);


    if(data) return data[0];

    // return JSON.parse(JSON.stringify(post)); // Ensure plain object serialization
  } catch (error) {
    console.error("Error creating post:", error?.message);
    return null; // Avoid returning complex objects on error
  }
};



