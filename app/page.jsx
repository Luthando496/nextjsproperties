import Header from "@/components/Header";
import HeroPosts from "@/components/HeroPosts";
import Navbar from "@/components/Navabar";
import connectDB from "@/utils/connectDB";
import { getPosts, newPost, newUser } from "./actions/newPost";
// import data from '@/data.json'\






export default async function Home() {
  await connectDB();
  // console.log(data)
  
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <HeroPosts />
    </>
  );
}
