"use server";
import { supabase } from "@/utils/connectDB";


const getSinglePost = async (id) => {
      const title = id.split("-").join(" ");
      console.log(title , "This is title")

  const { data, error } = await supabase
    .from("post")
    .select("*")
    .ilike("title", `%${title}`); // Case-insensitive search

  if (error) console.error("Error fetching post:", error);

  return data[0];
};



export async function searchBlogs(searchTerm) {
  const { data, error } = await supabase
      .from("post")
      .select("*")
      .or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);

      console.log(data,"DATA SERVER")

  if (error) {
      console.error("Error searching blogs:", error);
      return [];
  }
  return data;
}





export default getSinglePost;
