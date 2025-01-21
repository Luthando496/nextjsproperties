import getSinglePost from '@/app/actions/getSinglePost';
import connectDB from '@/utils/connectDB'
import React from 'react'

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
      title: post.title || "Default Title", // Fallback to a default title
    };
  } catch (error) {
    console.error("Error generating metadata:", error);

    return {
      title: "Error Loading Post", // Handle errors gracefully
    };
  }
}


const SinglePost = async({params}) => {
  const {id} = await params;
  await connectDB();
  const post = await getSinglePost(id);
  // console.log("SINGLE POST",post)

  return (
    <>
    <section className="tilted-div py-32 mb-20 ">
      <div className="flex justify-center items-center container mx-auto h-full">
        <div className="w-1/2">
        <div className="flex justify-center items-center">
          <img src={post.postImage} alt="image" className="w-28 h-28 my-3 rounded-full object-cover" />

        </div>
          <h1 className="text-4xl font-bold leading-[1.3] text-white text-center">{post.title}</h1>
          <div className="flex gap-4 mt-2 justify-center items-start">
            <span className="text-sm text-white font-semibold">{post?.author?.name}</span>
            <span className="text-sm text-white font-semibold">March 25, 2024</span>
            <span className="text-sm text-white font-semibold">no comments</span>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full flex justify-center relative px-36 m-10 mx-auto">
      <img src={post.postImage} alt="image" className="h-[30rem] hover:-rotate-2 duration-500  w-[50rem] z-40 absolute object-cover -top-80" />
    </section>
    
    <section   className="px-36 mx-auto mt-[14rem] mb-10">
      <div dangerouslySetInnerHTML={{__html:post.description}} className=""></div>
    </section>
    </>
  )
}

export default SinglePost