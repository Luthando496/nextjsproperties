"use server"
const { supabase } = require("@/utils/connectDB");


const getPosts = async () => {
    const { data, error } = await supabase.from('post').select('*').order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching posts:", error);
        return { posts: [], error };
    }

    return { posts: data, error};
}


export const getRelatedPost = async (post) => {
    const searchTag = post.category;
        console.log(searchTag,"category")
        const { data, error } = await supabase
        .from('post')
        .select('*')
        .contains('tags', [searchTag]);

        const filteredPosts = data.filter(p=> p.postID !== post.postID)


  // Case-insensitive search

  if (error) console.error("Error fetching Related Posts post:", error);

  return filteredPosts;
};


export const getPostsByCategory = async (category) => {
        console.log(category,"category")
        const { data, error } = await supabase
        .from('post')
        .select('*')
        .contains('tags', [category]);

        console.log(data,"Tags posts")


  // Case-insensitive search

  if (error) console.error("Error fetching Related Posts post:", error);

  return data;
};

export default getPosts;

