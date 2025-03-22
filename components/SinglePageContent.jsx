"use client";

import useAuthStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sanitizeHtml from "sanitize-html";

const SinglePageContent = ({ post }) => {
  const sanitizedDescription = sanitizeHtml(post.description);
  const { user } = useAuthStore((state) => state);
  const titleTop = post.length > 20 ? post.title.slice(0, 20) : post.title;

  return (
    <>
      <div className="py-5 pl-10 bg-black text-white w-full flex gap-6 items-start">
        <Link
          href="/"
          className="group overflow-hidden text-sm  md:text-lg font-serif relative  hover:border-none pb-1 flex gap-3"
        >
          Home <span className="">/</span>
          <span className="group-hover:-translate-x-full translate-x-0 duration-500  absolute bottom-0 w-[88%] h-[1px] bg-white"></span>
        </Link>
        <Link
          href={`/categories/${post?.category}`}
          className="group overflow-hidden text-sm  md:text-lg font-serif relative  hover:border-none pb-1 flex gap-3"
        >
          {post?.category} <span className="">/</span>
          <span className="group-hover:-translate-x-full translate-x-0 duration-500  absolute bottom-0 w-[80%] h-[1px] bg-white"></span>
        </Link>
        <span className="text-sm md:text-lg"> {titleTop}</span>
      </div>
      <section className="">
        <div className="flex justify-center items-center container px-5 md:px-0 mx-auto h-full">
          <div className="w-[70%]">
            {/* <div className="flex justify-center items-center">
              <img
                src={user.user_metadata?.avatar_url}
                alt="image"
                className="w-28 h-28 md:my-3 rounded-full object-cover"
              />
            </div> */}
            <h1 className="text-lg lg:text-4xl font-bold leading-[1.3] text-indigo-800 text-center">
              {post.title}
            </h1>
            <div className="flex gap-2 mt-2 justify-center items-start">
              <span className="text-sm text-black font-semibold">
               Post Created By {" "}{post?.author}. 
              </span>
              <span className="text-sm text-black font-semibold">
                Date Created {" "}
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}.{" "}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center relative px-2 md:px-11 lg:px-28 m-10 mx-auto">
        <Image
          width={500}
          height={500}
          src={post.post_image}
          alt="image"
          className="h-[20rem] lg:h-[30rem] hover:-rotate-2 duration-500 px-5 md:px-10 w-full  lg:w-[50rem] z-40  object-cover"
        />
      </section>

      <section className="flex items-center justify-center mx-auto mt-[5rem] mb-10">
        <div
          className="px-8 md:px-14 lg:px-[15rem]"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        ></div>
      </section>
    </>
  );
};

export default SinglePageContent;
