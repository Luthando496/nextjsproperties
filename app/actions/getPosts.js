"use server";
const { supabase } = require("@/utils/connectDB");

const getPosts = async () => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return { posts: [], error };
  }

  return { posts: data, error };
};

export const getRelatedPost = async (post) => {
  const searchTag = post.category;
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .contains("tags", [searchTag]);

  const filteredPosts = data.filter((p) => p.postID !== post.postID);

  // Case-insensitive search

  if (error) console.error("Error fetching Related Posts post:", error);

  return filteredPosts;
};

export const getPostsByCategory = async (category) => {
  try {
    // Convert category input to lowercase for consistency
    const lowercasedCategory = category.toLowerCase();
    console.log(category)

    // Perform the query
    const { data, error } = await supabase
    .from("post")
    .select("*")
    .contains("tags", [category]);

    if (error) {
      console.error("Error fetching posts by category:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};


export default getPosts;
