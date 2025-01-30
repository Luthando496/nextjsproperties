import Post from "@/models/Post";
export const returnPosts = async (category) => {
    // "use server"
  const tagToSearch = category; // Replace with the tag you're searching for
  const posts = await Post.find({
    tags: { $regex: tagToSearch, $options: "i" },
  }).populate("author");

  return posts;
};
