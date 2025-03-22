import getSinglePost from "@/app/actions/getSinglePost";
import React from "react";
import CardPost from "@/components/CardPost";
import getPosts,{getRelatedPost} from "@/app/actions/getPosts";
import SinglePageContent from "@/components/SinglePageContent";
// import {getRelatedPost} from '@app/actions/getSinglePost'




export async function generateMetadata({ params }) {
  try {
    const { id } = await params;

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
  const { id } = await params;
  const post = await getSinglePost(id);

  const posts = await getRelatedPost(post);
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <SinglePageContent post={post} />

      <section className='w-full my-20 '>
        <h2 className="text-3xl font-semibold text-center text-teal-800 mt-20 mb-2">Related Posts</h2>
        <div className="h-[1px] bg-amber-800 flex justify-center mx-auto w-[140px] md:w-[200px]"></div>
        <div className="container grid px-10 md:px-24 mt-20 justify-center gap-10 lg:grid-cols-2">

        {posts.length > 0 && posts.map(post=>(
          <CardPost key={post.postID} post={post} />
        ))}
        </div>
      </section>
    </>
  );
};

export default SinglePost;
