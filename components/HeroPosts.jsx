import getPosts from "@/app/actions/getPosts";
import { tagNames } from "@/utils/tagNames";
import Image from "next/image";
import Link from "next/link";





const HeroPosts = async() => {
    const {posts} = await getPosts();
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-16">Latest Posts</h1>
      <main className="grid grid-cols-1 relative lg:grid-cols-3 gap-20 px-20 bg-white py-10">
        {/* left section */}
        <section className="w-full space-y-5 col-span-1 lg:col-span-2">
          {/* single post */}
          {posts.length > 0 ? posts.map((post,index) => (
            <section key={post.postID}>
            <div
            className="w-full hidden overflow-hidden md:flex bg-white  shadow-md hover:rounded-b-lg hover:shadow-2xl hover:-translate-y-2 duration-500"
          >
            <img
              src={post.post_image}
              alt="post-image"
              className="h-[266px] object-cover w-[240px] flex-[25%]"
              // fill
            />
            <div className="flex flex-col flex-[75%] space-y-6 justify-center py-3 px-2 items-center">
            <h1 className="text-xl text-center py-2">
              <Link
                href={`/posts/${tagNames(post.title)}`}
                className="text-[#900024] font-play"
              >
                {post.title}
              </Link>
              {/* Exploring the Beauty of Nature */}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: post.description }}
              className="line-clamp-6 pb-[2px] h font-roboto text-center overflow-hidden px-3 "
            ></div>

            </div>
          </div>
          {/* separator */}
          <div key={post.name} className="w-full md:hidden shadow-xl hover:-translate-y-2 duration-500">
             <img
               src={post.postImage}
               alt=""
               className="w-full h-[12rem] object-cover"
             />
             <h1  className="text-xl text-center py-2">
               <Link href={`/posts/${tagNames(post.title)}`} className="text-teal-600">
                 {post.title}
               </Link>
               
             </h1>
             <div  dangerouslySetInnerHTML={{__html:post.description}} className="line-clamp-[4] text-center overflow-hidden px-3 pb-1">
               
             </div>
           </div>
            </section>
          )) : <h1>No Posts</h1>}
          
  
          {/* END POST */}
        </section>
        {/* right section  sticky top-36 z-10*/}
        <aside className="w-full col-span-1 items-start ">
          <div className="flex gap-4 py-5">
            <input
              type="text"
              className="w-full px-8 placeholder:text-xl placeholder:font-light focus:outline-none focus:border-b focus:border-b-red-700"
              placeholder="Search You Favorite Topics"
            />
            <button className="bg-[#db0231cc] tracking-[3px] uppercase px-2 text-white py-2">
              Search
            </button>
          </div>

          <h2 className="text-4xl font-bold text-red-600">Recent Posts</h2>
          <div className="flex flex-col mt-6 gap-3">
            {/* single post */}
            {posts.length > 0 ? posts.map((post) => (
              <Link key={post.postID} href={`/posts/${tagNames(post.title)}`} className="text-lg text-black font-light pb-1 hover:border-b hover:border-b-amber-500 cursor-pointer">{post.title}</Link>
            )) : <h1>No Posts</h1>}
            
          </div>
        </aside>
        {/* ASIDES */}
      </main>
    </>
  );
};

export default HeroPosts;
