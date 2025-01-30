import getSinglePost from "@/app/actions/getSinglePost";
import connectDB from "@/utils/connectDB";
import React from "react";
import Link from "next/link";
import Post from "@/models/Post";
import Carousel from "@/components/Carousel";

export async function generateMetadata({ params }) {
  try {
    const { id } = params;

    const post = await getSinglePost(id);

    if (!post) {
      return {
        title: "Post Not Found",
      };
    }

    return {
      title: post.title || "Default Title",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);

    return {
      title: "Error Loading Post",
    };
  }
}

const SinglePost = async ({ params }) => {
  const { id } = params;
  await connectDB();
  const post = await getSinglePost(id);
  const posts = await Post.find({
    tags: { $regex: post.category, $options: "i" },
  }).populate("author");
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="py-5 pl-10 bg-black text-white w-full flex gap-6 items-start">
        <Link
          href="/"
          className="group overflow-hidden  text-lg font-serif relative  hover:border-none pb-1 flex gap-3"
        >
          Home <span className="">/</span>
          <span className="group-hover:-translate-x-full translate-x-0 duration-500  absolute bottom-0 w-[88%] h-[1px] bg-white"></span>
        </Link>
        <Link
          href={`/categories/${post.category}`}
          className="group overflow-hidden  text-lg font-serif relative  hover:border-none pb-1 flex gap-3"
        >
          {post.category} <span className="">/</span>
          <span className="group-hover:-translate-x-full translate-x-0 duration-500  absolute bottom-0 w-[88%] h-[1px] bg-white"></span>
        </Link>
        <span className="text-lg"> {post.title}</span>
      </div>
      <section className="tilted-div py-32 mb-20 ">
        <div className="flex justify-center items-center container mx-auto h-full">
          <div className="w-1/2">
            <div className="flex justify-center items-center">
              <img
                src={post.postImage}
                alt="image"
                className="w-28 h-28 my-3 rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold leading-[1.3] text-white text-center">
              {post.title}
            </h1>
            <div className="flex gap-4 mt-2 justify-center items-start">
              <span className="text-sm text-white font-semibold">
                {post?.author?.name}
              </span>
              <span className="text-sm text-white font-semibold">
                {new Date(post.createdAt).getDate()} ,{" "}
                {new Date(post.createdAt).getFullYear()}{" "}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center relative px-36 m-10 mx-auto">
        <img
          src={post.postImage}
          alt="image"
          className="h-[30rem] hover:-rotate-2 duration-500  w-[50rem] z-40 absolute object-cover -top-80"
        />
      </section>

      <section className="flex items-center justify-center mx-auto mt-[14rem] mb-10">
        <div className='px-[15rem]' dangerouslySetInnerHTML={{ __html: post.description }}></div>
      </section>
    </>
  );
};

export default SinglePost;
