import getPosts from "@/app/actions/getPosts";
import { tagNames } from "@/utils/tagNames";
import Image from "next/image";
import Link from "next/link";
import CardPost from "./CardPost";




const HeroPosts = async() => {
    const {posts} = await getPosts();
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-16">Latest Posts</h1>
      <main className="grid grid-cols-1 relative lg:grid-cols-3 gap-20 px-8  lg:px-20 bg-white py-10">
        {/* left section */}
        <section className="w-full space-y-5 col-span-1 lg:col-span-2">
          {/* single post */}
          {posts.length > 0 ? posts.map((post,index) =>{
           

            return <CardPost key={post.postID} post={post}   />
          } 
          ) : <h1>No Posts</h1>}
          
  
          {/* END POST */}
        </section>
        {/* right section  sticky top-36 z-10*/}
        <aside className="w-full col-span-1 items-start ">
          <div className="flex gap-4 py-5">
            <input
              type="text"
              className="w-full px-3 md:px-8 placeholder:text-xl placeholder:font-light focus:outline-none focus:border-b focus:border-b-red-700"
              placeholder="Search You Favorite Topics"
            />
            <button className="bg-[#db0231cc] rounded-sm md:tracking-[3px] text-base uppercase px-2 text-white py-2">
              Search
            </button>
          </div>

          <h2 className="text-4xl font-bold text-red-600">Recent Posts</h2>
          <div className="flex flex-col mt-6 gap-1 md:gap-3">
            {/* single post */}
            {posts.length > 0 ? posts.slice(0,5).map((post) => (
              <Link key={post.postID} href={`/posts/${tagNames(post.title)}`} className="text-base font-semibold md:text-lg text-black md:font-light pb-1 hover:border-b hover:border-b-amber-500 cursor-pointer">{post.title}</Link>
            )) : <h1>No Posts</h1>}
            
          </div>
        </aside>
        {/* ASIDES */}
      </main>
    </>
  );
};

export default HeroPosts;
