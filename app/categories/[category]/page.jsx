import Post from '@/models/Post';
import connectDB from '@/utils/connectDB';
import { tagNames } from '@/utils/tagNames';
import Link from 'next/link'
import React from 'react'

const SingleCategoryPage = async({params}) => {
  await connectDB();
  const { category } = await params;
  const caseInsensitiveCategory = new RegExp(category, 'i');
  const postsWithCategory = await Post.find({
    tags: { $in: [caseInsensitiveCategory] }
  });

  const categories = [
    "Apple",
    "Mercedes",
    "Ferrari",
    "News",
    "Technology",
    "Design",
    "Health",
    "Nature",
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

      <main className="grid grid-cols-1 md:grid-cols-3 py-24 px-10 md:px-24">
        <div className="col-span-2 w-full grid grid-cols-1 mb-8 md:grid-cols-2 gap-5">
          {postsWithCategory.length > 0 && postsWithCategory.map((post)=>(
            
          <div key={post._id} className="w-full shadow-xl hover:-translate-y-2 duration-500">
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
          ))}
          
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
  )
}

export default SingleCategoryPage