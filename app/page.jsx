import Header from "@/components/Header";
import HeroPosts from "@/components/HeroPosts";
import connectDB from "@/utils/connectDB";
import { getPosts, newPost, newUser } from "./actions/newPost";
import "react-quill-new/dist/quill.snow.css";





export default async function Home() {
  await connectDB();

  // await newPost();

  
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <HeroPosts />
    </>
  );
}
