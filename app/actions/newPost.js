"use server";

import { supabase } from "@/utils/connectDB";

export const newPost = async (myData) => {
  try {

    const { data, error } = await supabase
      .from("post")
      .insert([myData])
      .select();

    if (data) return data[0];

  } catch (error) {
    console.error("Error creating post:", error?.message);
    return null; // Avoid returning complex objects on error
  }
};
