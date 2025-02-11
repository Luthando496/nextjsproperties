import getPosts from "@/app/actions/getPosts";
import { tagNames } from "@/utils/tagNames";
import Image from "next/image";
import Link from "next/link";




const Header = async() => {
  const posts = await getPosts();

  return (
    <header className="w-full header-bg  relative min-h-screen pb-[8rem] pt-[4rem] space-y-8 main-header text-white flex items-center flex-col py-32 justify-center">
      <h1 className="text-5xl font-bold">Welcome to Next.js Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-10">
        {/* SINGLE */}
        {posts.length > 0 && posts.slice(0,4).map(post =>(
           <div key={post._id} className="article hover:translate-y-3 duration-500 h-[420px] z-0 relative bg-white text-black rounded-lg shadow-lg">
           {/* IMAGE */}
           <Image
             src={post.postImage}
             alt={post.title}
             width={300}
             height={200}
             className="object-cover z-0 w-full absolute h-full "
             // fill/
             />
             <div className="absolute top-0 bg-black/60 w-full h-full"></div>
             <div className="w-full absolute bottom-0 py-4 px-8">
           <p className="text-center text-white z-50">{post.category}</p>
           <Link href={`/posts/${tagNames(post.title)}`} className="text-xl text-white text-center z-50 font-light">{post.title}</Link>

             </div>
         </div>
        ))}
       
        {/* SINGLE */}

      </div>
    </header>
  );
};

export default Header;
