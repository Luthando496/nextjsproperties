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
    <div className=" lg:max-w-[50%] mx-2 md:mx-7 lg:mx-auto overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mt-10">
      {/* Breadcrumb Navigation */}
      <div className="py-4 pl-6 bg-black text-white w-full flex gap-4 items-center overflow-x-auto">
        <Link
          href="/"
          className="group overflow-hidden text-sm md:text-base font-serif relative hover:border-none pb-1 flex gap-2"
        >
          Home <span className="">/</span>
          <span className="group-hover:-translate-x-full translate-x-0 duration-500 absolute bottom-0 w-[88%] h-[1px] bg-white"></span>
        </Link>
        <Link
          href={`/categories/${post?.category}`}
          className="group overflow-hidden text-sm md:text-base font-serif relative hover:border-none pb-1 flex gap-2"
        >
          {post?.category} <span className="">/</span>
          <span className="group-hover:-translate-x-full translate-x-0 duration-500 absolute bottom-0 w-[80%] h-[1px] bg-white"></span>
        </Link>
        <span className="text-sm md:text-base truncate">{titleTop}</span>
      </div>

      {/* Header and Metadata */}
      <div className="p-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.3] text-indigo-800 text-center mb-4">
          {post.title}
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center text-sm text-gray-600 mb-4">
          <span className="font-semibold">Post Created By: {post?.author}</span>
          <span className="font-semibold">
            Date Created: {new Date(post.created_at).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          width={700}
          height={256}
          src={post.post_image}
          alt="image"
          className="w-full h-64 sm:h-80 sm:w-[90%] object-cover"
          // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div
          className="text-gray-700 text-base sm:text-lg px-4 md:px-8 lg:px-12"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </div>
    </div>
  );
};

export default SinglePageContent;