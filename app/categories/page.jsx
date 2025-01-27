import Post from "@/models/Post";
import { tagNames } from "@/utils/tagNames";
import Link from "next/link";

const CategoryPage = async () => {

  const categoriesPost = await Post.find({}).sort({ createdAt: -1 }).limit(3);

  const categories = [
    "Apple",
    "Mercedes",
    "Ferrari",
    "News",
    "Technology",
    "Design",
    "Health",
    "Business",
  ];

  return (
    <>
      <section className="w-full py-14 bg-[#900024]">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-white">
            Categories
          </h1>
        </div>
      </section>


      {/*MAIN SECTION  */}


      <main className="grid grid-cols-1 md:grid-cols-3 py-24 px-10 md:px-24">
        <div className="col-span-2 w-full grid grid-cols-1 mb-8 md:grid-cols-3 gap-5">
          {/*  */}
          {categoriesPost.map((post, index) => (
            <div key={post._id} className="w-full shadow-xl hover:-translate-y-2 duration-500">
            <img
              src={post.postImage}
              alt=""
              className="w-full h-32"
              fill
            />
            <h1  className="text-xl text-center py-2">
              <Link href={`/posts/${tagNames(post.title)}`} className="text-teal-600">
                {post.title}
              </Link>
              {/* Exploring the Beauty of Nature */}
            </h1>
            <div dangerouslySetInnerHTML={{__html:post.description}} className="line-clamp-6 text-center overflow-hidden px-3 pb-4">
              
            </div>
          </div>
          ))}
          
          {/*  */}

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

export default CategoryPage;
