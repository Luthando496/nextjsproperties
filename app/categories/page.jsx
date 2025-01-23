import Link from "next/link";

const CategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = [
    "Apple",
    "Mercedes",
    "Ferrari",
    "News",
    "Technology",
    "Science",
    "Health",
    "Business",
  ];

  return (
    <>
      <section className="w-full py-14 bg-[#900024]">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-white">
            Category: <span className="font-serif">Apple</span>
          </h1>
        </div>
      </section>


      {/*MAIN SECTION  */}


      <main className="grid grid-cols-1 md:grid-cols-3 py-24 px-10 md:px-24">
        <div className="col-span-2 w-full grid grid-cols-1 mb-8 md:grid-cols-3 gap-5">
          {/*  */}
          <div className="w-full shadow-xl hover:-translate-y-2 duration-500">
            <img
              src="https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-32"
            />
            <h1  className="text-xl text-center py-2">
              <Link href={`/posts/${"678abd6d819fde96a4dd70f6"}`} className="text-teal-600">
                Exploring the Beauty of Nature
              </Link>
              {/* Exploring the Beauty of Nature */}
            </h1>
            <p className="line-clamp-5 text-center overflow-hidden px-3 pb-4">
              revolutionized the way we live and interact with the world around
              us. From smartphones to artificial intelligence, the advancements
              are astounding
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-full shadow-xl hover:-translate-y-2 duration-500">
            <img
              src="https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-32"
            />
            <h1  className="text-xl text-center py-2">
              <Link href={`/posts/${"678abd6d819fde96a4dd70f6"}`} className="text-teal-600">
                Exploring the Beauty of Nature
              </Link>
              {/* Exploring the Beauty of Nature */}
            </h1>
            <p className="line-clamp-5 text-center overflow-hidden px-3 pb-4">
              revolutionized the way we live and interact with the world around
              us. From smartphones to artificial intelligence, the advancements
              are astounding
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-full shadow-xl hover:-translate-y-2 duration-500">
            <img
              src="https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-32"
            />
            <h1  className="text-xl text-center py-2">
              <Link href={`/posts/${"678abd6d819fde96a4dd70f6"}`} className="text-teal-600">
                Exploring the Beauty of Nature
              </Link>
              {/* Exploring the Beauty of Nature */}
            </h1>
            <p className="line-clamp-5 text-center overflow-hidden px-3 pb-4">
              revolutionized the way we live and interact with the world around
              us. From smartphones to artificial intelligence, the advancements
              are astounding
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-full shadow-xl hover:-translate-y-2 duration-500">
            <img
              src="https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-32"
            />
            <h1  className="text-xl text-center py-2">
              <Link href={`/posts/${"678abd6d819fde96a4dd70f6"}`} className="text-teal-600">
                Exploring the Beauty of Nature
              </Link>
              {/* Exploring the Beauty of Nature */}
            </h1>
            <p className="line-clamp-5 text-center overflow-hidden px-3 pb-4">
              revolutionized the way we live and interact with the world around
              us. From smartphones to artificial intelligence, the advancements
              are astounding
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="w-full shadow-xl hover:-translate-y-2 duration-500">
            <img
              src="https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-32"
            />
            <h1 className="text-xl text-center py-2">
              <Link href={`/posts/${"678abd6d819fde96a4dd70f6"}`} className="text-teal-600">
                Exploring the Beauty of Nature
              </Link>
              {/* Exploring the Beauty of Nature */}
            </h1>
            <p className="line-clamp-5 text-center overflow-hidden px-3 pb-4">
              revolutionized the way we live and interact with the world around
              us. From smartphones to artificial intelligence, the advancements
              are astounding
            </p>
          </div>
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
