import Post from "@/models/Post";
import { tagNames } from "@/utils/tagNames";
import Link from "next/link";
import React from "react";
import { getPostsByCategory } from "@/app/actions/getPosts";
import SearchComponent from "@/components/Search";

const SingleCategoryPage = async ({ params }) => {
  const { category } = await params;
  const postsWithCategory = await getPostsByCategory(category);

  const categories = [
    "Fitness",
    "Health",
    "Ferrari",
    "News",
    "Technology",
    "Design",
    "Health",
    "Environment",
  ];

  return (
    <>
      <section className="w-full py-14 bg-[#900024]">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-white font-play uppercase tracking-widest">
            Category : <span className="capitalize font-serif">{category}</span>
          </h1>
        </div>
      </section>

      <SearchComponent />

      <main className="grid grid-cols-1 md:grid-cols-3 py-24 px-10 md:px-24">
        <div className="col-span-2 w-full grid grid-cols-1 mb-8 md:grid-cols-2 gap-5">
          {postsWithCategory.length > 0 ? (
            postsWithCategory.map((post) => (
              <div
                key={post.postID}
                className="w-full shadow-xl hover:-translate-y-2 duration-500"
              >
                <img
                  src={post.post_image}
                  alt="post-Image"
                  className="w-full h-[12rem] object-cover"
                />
                <h1 className="text-xl text-center py-2">
                  <Link
                    href={`/posts/${tagNames(post.title)}`}
                    className="text-teal-600"
                  >
                    {post.title}
                  </Link>
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: post.description }}
                  className="line-clamp-[4] text-center overflow-hidden px-3 pb-1"
                ></div>
              </div>
            ))
          ) : (
            <h1>Not Posts With That category Found!</h1>
          )}
        </div>

        <div className="w-full-col-span-1">
          <div className="flex flex-col md:items-center">
            <h1 className="text-4xl font-medium font-serif">Categories</h1>
            <ul className="mt-4">
              {categories.map((category, index) => (
                <li key={index} className="py-2">
                  <Link
                    href={`/categories/${category}`}
                    className="text-orange-700 font-semibold"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleCategoryPage;
