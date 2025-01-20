"use server";

import Post from "@/models/Post";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export const newUser = async () => {
  await connectDB();

  const user = await User.create({
    name: "John Doe",
    email: "doe@gmail.com",
    profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });


    console.log(user);
};



export const newPost = async () => {
  await connectDB();

const post = await Post.create({
  title: "The Evolution of Technology",
    description: "<p><em>Technology</em> has revolutionized the way we live and interact with the world around us. From smartphones to artificial intelligence, the advancements are astounding.</p><p>Consider how the internet has bridged gaps, connecting people from different corners of the globe instantly.</p><p>However, with these advancements come challenges, such as maintaining privacy and ensuring ethical practices.</p><p>In the workplace, automation has increased efficiency but has also sparked debates about job displacement.</p><p>As we look to the future, it is essential to find a balance, leveraging technology to improve lives without compromising humanity.</p><p>This is a sample post in the technology category. It has multiple paragraphs with interesting content.</p><p>The latest advancements in artificial intelligence have led to significant breakthroughs in various industries.</p><p>From healthcare to finance, AI-powered solutions are being implemented to improve efficiency and accuracy.</p><p>One of the most promising applications of AI is in the field of data analysis.</p><p>By leveraging machine learning algorithms, businesses can gain valuable insights from large datasets.</p><p>This can lead to better decision-making and improved outcomes.</p><p>However, the increasing reliance on AI also raises concerns about job displacement and bias.</p><p>As the technology continues to evolve, it is essential to address these issues proactively.</p><p>By doing so, we can ensure that AI benefits society as a whole.</p><p>In conclusion, the future of AI holds much promise, but it is crucial to be aware of the potential risks.</p>",
    postImage: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["technology", "innovation", "future"],
    category:"Technology",
    author:"678abc99819fde96a4dd70e6",

});


};




