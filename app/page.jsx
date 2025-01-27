import Header from "@/components/Header";
import HeroPosts from "@/components/HeroPosts";
import Navbar from "@/components/Navabar";
import connectDB from "@/utils/connectDB";
import { getPosts, newPost, newUser } from "./actions/newPost";
// import data from '@/data.json'\
import dataPosts from '@/data2.json' 






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
