// "use server";

import { supabase } from "@/utils/connectDB";




export const newPost = async (myData) => {
  try {
    const fileName = `${Date.now()}_${myData.post_image.name}`;
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("images")
      .upload(fileName, myData.post_image);

    if(uploadError) {
      console.error("File upload error:", uploadError.message);
      return;
    }
    const { data: publicUrlData } = supabase
    .storage
    .from("images")
    .getPublicUrl(fileName);

    myData.post_image = publicUrlData.publicUrl;

    const { data, error } = await supabase
      .from("post")
      .insert([myData])
      .select();
    console.log("Post created, ", data);

    if (data) return data[0];


    // return JSON.parse(JSON.stringify(post)); // Ensure plain object serialization
  } catch (error) {
    console.error("Error creating post:", error?.message);
    return null; // Avoid returning complex objects on error
  }
};
