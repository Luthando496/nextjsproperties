"use client";

import { searchBlogs } from "@/app/actions/getSinglePost";
import CardPost from "@/components/CardPost";
import { tagNames } from "@/utils/tagNames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const submitSearch = async () => {
    try {
      const data = await searchBlogs(search);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (search.trim() !== "") {
      submitSearch();
    }
  }, [search]);

  return (
    <>
      <section className="flex justify-center mx-auto">
        <div className="flex gap-4 py-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-8 md:placeholder:text-md placeholder:font-light focus:outline-none focus:border-b focus:border-b-red-700 border-b border-b-slate-950"
            placeholder="Search Your Favorite Topics"
          />
          <button
            onClick={submitSearch}
            className="bg-[#db0231cc] tracking-[3px] uppercase px-2 text-white py-2"
          >
            Search
          </button>
        </div>
      </section>

      <section className="my-10 w-full px-8 lg:px-28">
        {/* Search Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="w-full overflow-hidden flex flex-col  bg-black lg:bg-white  shadow-md shadow-black hover:rounded-b-lg hover:shadow-2xl hover:-translate-y-2 duration-500">
                <Link href={`/posts/${tagNames(post.title)}`}>
                  <Image
                    src={post.post_image}
                    alt="post-image"
                    className="h-[15rem] lg:h-[15rem] object-cover  w-full md:w-full lg:flex-[25%]"
                    width={240}
                    height={150}
                    // fill
                  />
                </Link>
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
                    className="line-clamp-6 pb-[2px] text-white lg:text-black font-roboto text-center overflow-hidden px-3 "
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-2xl">No Post Found</div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchPage;
