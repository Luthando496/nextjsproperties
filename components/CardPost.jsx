import Image from "next/image";
import Link from "next/link";
import { tagNames } from "@/utils/tagNames";



const CardPost = ({post}) => {
  return (
    <div
          className="w-full overflow-hidden flex bg-white  shadow-md hover:rounded-b-lg hover:shadow-2xl hover:-translate-y-2 duration-500"
        >
          <Image
            src={post.postImage}
            alt="post-image"
            className="h-[15rem] object-cover w-[240px] flex-[25%]"
            width={240}
            height={150}
            // fill
          />
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
            className="line-clamp-6 pb-[2px]  font-roboto text-center overflow-hidden px-3 "
          ></div>

          </div>
        </div>
  )
}

export default CardPost
