import getPosts from "@/app/actions/getPosts";
import Image from "next/image";
import Link from "next/link";





const HeroPosts = async() => {
    const posts = await getPosts();
    // console.log(posts)
  return (
    <>
      <h1 className="text-center text-3xl font-bold my-10">Latest Posts</h1>
      <main className="grid grid-cols-3 relative lg:grid-cols-3 gap-20 px-20 bg-white py-36">
        {/* left section */}
        <section className="w-full space-y-48  col-span-2">
          {/* single post */}
          {posts.length > 0 ? posts.map((post) => (
            <div key={post._id} className=" relative h-auto shadow-sm shadow-black/60 items-center gap-4 p-4 bg-gray-100 rounded-sm">
            <Image
              src={post.postImage}
              alt="car"
              width={190}
              height={290}
              className="shadow-2xl rounded-lg absolute -top-28 left-50"
            />
            <div className="w-full flex flex-col space-y-5">
              <Link href={`/posts/${post._id}`} className="text-2xl text-center font-semibold text-black">
                {post.title}
              </Link>
              <div dangerouslySetInnerHTML={{__html:post.description}} className="text-zinc-800">
                {/* {} */}
              </div>

              <div className="flex gap-8 items-center text-sm my-4">
                <span className="text-yellow-800">Author : Luthando Dihs</span>
                <span className="text-yellow-800">Date : 12 December 2024</span>
                <span className="text-yellow-800">Category : cars</span>
                <p className="flex gap-2">tags :
                   {post.tags.map((tag,index)=>(
                        <span key={index} className="text-yellow-800">{tag}</span>
                    ))}
                </p>
              </div>
            </div>
          </div>
          )) : <h1>No Posts</h1>}
          
          {/* END POST */}
          {/* single post */}
          <div className=" relative h-auto shadow-sm shadow-black/60 items-center gap-4 p-4 bg-gray-100 rounded-sm">
            <Image
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="car"
              width={190}
              height={290}
              className="shadow-2xl  absolute -top-28 left-50"
            />
            <div className="w-full flex flex-col space-y-5">
              <h3 className="text-2xl text-center font-semibold text-black">
                Cars that Are Not Reliable
              </h3>
              <p className="text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quos? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque ea harum id, amet, eaque quia
                voluptatum quos minima eveniet, quaerat iure dolores quam
                quisquam earum mollitia? Recusandae vero tenetur, fugiat nobis
                suscipit atque hic sit fuga aliquid iste est aliquam praesentium
                quas sint, neque, dicta accusamus rerum velit magnam?
                Praesentium, pariatur ipsa. Exercitationem explicabo tempora
                necessitatibus repudiandae recusandae...
              </p>

              <div className="flex gap-8 items-center text-sm my-4">
                <span className="text-yellow-800">Author : Luthando Dihs</span>
                <span className="text-yellow-800">Date : 12 December 2024</span>
                <span className="text-yellow-800">Category : cars</span>
              </div>
            </div>
          </div>
          {/* END POST */}
          {/* single post */}
          <div className=" relative h-auto shadow-sm shadow-black/60 items-center gap-4 p-4 bg-gray-100 rounded-sm">
            <Image
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="car"
              width={190}
              height={290}
              className="shadow-2xl  absolute -top-28 left-50"
            />
            <div className="w-full flex flex-col space-y-5">
              <h3 className="text-2xl text-center font-semibold text-black">
                Cars that Are Not Reliable
              </h3>
              <p className="text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quos? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque ea harum id, amet, eaque quia
                voluptatum quos minima eveniet, quaerat iure dolores quam
                quisquam earum mollitia? Recusandae vero tenetur, fugiat nobis
                suscipit atque hic sit fuga aliquid iste est aliquam praesentium
                quas sint, neque, dicta accusamus rerum velit magnam?
                Praesentium, pariatur ipsa. Exercitationem explicabo tempora
                necessitatibus repudiandae recusandae...
              </p>

              <div className="flex gap-8 items-center text-sm my-4">
                <span className="text-yellow-800">Author : Luthando Dihs</span>
                <span className="text-yellow-800">Date : 12 December 2024</span>
                <span className="text-yellow-800">Category : cars</span>
              </div>
            </div>
          </div>
          {/* END POST */}
          {/* single post */}
          <div className=" relative h-auto shadow-sm shadow-black/60 items-center gap-4 p-4 bg-gray-100 rounded-sm">
            <Image
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="car"
              width={190}
              height={290}
              className="shadow-2xl  absolute -top-28 left-50"
            />
            <div className="w-full flex flex-col space-y-5">
              <h3 className="text-2xl text-center font-semibold text-black">
                Cars that Are Not Reliable
              </h3>
              <p className="text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quos? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque ea harum id, amet, eaque quia
                voluptatum quos minima eveniet, quaerat iure dolores quam
                quisquam earum mollitia? Recusandae vero tenetur, fugiat nobis
                suscipit atque hic sit fuga aliquid iste est aliquam praesentium
                quas sint, neque, dicta accusamus rerum velit magnam?
                Praesentium, pariatur ipsa. Exercitationem explicabo tempora
                necessitatibus repudiandae recusandae...
              </p>

              <div className="flex gap-8 items-center text-sm my-4">
                <span className="text-yellow-800">Author : Luthando Dihs</span>
                <span className="text-yellow-800">Date : 12 December 2024</span>
                <span className="text-yellow-800">Category : cars</span>
              </div>
            </div>
          </div>
          {/* END POST */}
          {/* single post */}
          <div className=" relative h-auto shadow-sm shadow-black/60 items-center gap-4 p-4 bg-gray-100 rounded-sm">
            <Image
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="car"
              width={190}
              height={290}
              className="shadow-2xl  absolute -top-28 left-50"
            />
            <div className="w-full flex flex-col space-y-5">
              <h3 className="text-2xl text-center font-semibold text-black">
                Cars that Are Not Reliable
              </h3>
              <p className="text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quos? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque ea harum id, amet, eaque quia
                voluptatum quos minima eveniet, quaerat iure dolores quam
                quisquam earum mollitia? Recusandae vero tenetur, fugiat nobis
                suscipit atque hic sit fuga aliquid iste est aliquam praesentium
                quas sint, neque, dicta accusamus rerum velit magnam?
                Praesentium, pariatur ipsa. Exercitationem explicabo tempora
                necessitatibus repudiandae recusandae...
              </p>

              <div className="flex gap-8 items-center text-sm my-4">
                <span className="text-yellow-800">Author : Luthando Dihs</span>
                <span className="text-yellow-800">Date : 12 December 2024</span>
                <span className="text-yellow-800">Category : cars</span>
              </div>
            </div>
          </div>
          {/* END POST */}
          {/* single post */}
          <div className=" relative h-auto shadow-sm shadow-black/60 items-center gap-4 p-4 bg-gray-100 rounded-sm">
            <Image
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="car"
              width={190}
              height={290}
              className="shadow-2xl  absolute -top-28 left-50"
            />
            <div className="w-full flex flex-col space-y-5">
              <h3 className="text-2xl text-center font-semibold text-black">
                Cars that Are Not Reliable
              </h3>
              <p className="text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quos? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque ea harum id, amet, eaque quia
                voluptatum quos minima eveniet, quaerat iure dolores quam
                quisquam earum mollitia? Recusandae vero tenetur, fugiat nobis
                suscipit atque hic sit fuga aliquid iste est aliquam praesentium
                quas sint, neque, dicta accusamus rerum velit magnam?
                Praesentium, pariatur ipsa. Exercitationem explicabo tempora
                necessitatibus repudiandae recusandae...
              </p>

              <div className="flex gap-8 items-center text-sm my-4">
                <span className="text-yellow-800">Author : Luthando Dihs</span>
                <span className="text-yellow-800">Date : 12 December 2024</span>
                <span className="text-yellow-800">Category : cars</span>
              </div>
            </div>
          </div>
          {/* END POST */}
          {/* single post */}
          <div className=" relative h-auto shadow-sm shadow-black/60 items-center gap-4 p-4 bg-gray-100 rounded-sm">
            <Image
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="car"
              width={190}
              height={290}
              className="shadow-2xl  absolute -top-28 left-50"
            />
            <div className="w-full flex flex-col space-y-5">
              <h3 className="text-2xl text-center font-semibold text-black">
                Cars that Are Not Reliable
              </h3>
              <p className="text-zinc-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, quos? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloremque ea harum id, amet, eaque quia
                voluptatum quos minima eveniet, quaerat iure dolores quam
                quisquam earum mollitia? Recusandae vero tenetur, fugiat nobis
                suscipit atque hic sit fuga aliquid iste est aliquam praesentium
                quas sint, neque, dicta accusamus rerum velit magnam?
                Praesentium, pariatur ipsa. Exercitationem explicabo tempora
                necessitatibus repudiandae recusandae...
              </p>

              <div className="flex gap-8 items-center text-sm my-4">
                <span className="text-yellow-800">Author : Luthando Dihs</span>
                <span className="text-yellow-800">Date : 12 December 2024</span>
                <span className="text-yellow-800">Category : cars</span>
              </div>
            </div>
          </div>
          {/* END POST */}
        </section>
        {/* right section  sticky top-36 z-10*/}
        <aside className="w-full col-span-1 items-start ">
          <div className="flex gap-4 py-5">
            <input
              type="text"
              className="w-full px-8 placeholder:text-xl placeholder:font-light focus:outline-none focus:border-b focus:border-b-red-700"
              placeholder="Search You Favorite Topics"
            />
            <button className="bg-[#db0231cc] tracking-[3px] uppercase px-2 text-white py-2">
              Search
            </button>
          </div>

          <h2 className="text-4xl font-bold text-red-600">Recent Posts</h2>
          <div className="flex flex-col mt-6 gap-3">
            <h3 className="text-xl text-black font-light pb-1 hover:border-b hover:border-b-amber-500 cursor-pointer">Lorem ipsum dolor sit amet.</h3>
            <h3 className="text-xl text-black font-light pb-1 hover:border-b hover:border-b-amber-500 cursor-pointer">Lorem ipsum dolor sit amet.</h3>
            <h3 className="text-xl text-black font-light pb-1 hover:border-b hover:border-b-amber-500 cursor-pointer">Lorem ipsum dolor sit amet.</h3>
            <h3 className="text-xl text-black font-light pb-1 hover:border-b hover:border-b-amber-500 cursor-pointer">Lorem ipsum dolor sit amet.</h3>
            <h3 className="text-xl text-black font-light pb-1 hover:border-b hover:border-b-amber-500 cursor-pointer">Lorem ipsum dolor sit amet.</h3>
          </div>
        </aside>
        {/* ASIDES */}
      </main>
    </>
  );
};

export default HeroPosts;
