import Image from "next/image";
import Link from "next/link";
import { tagNames } from "@/utils/tagNames";
import sanitizeHtml from "sanitize-html";

const CardPost = ({ post }) => {
  const sanitizedDescription = sanitizeHtml(post.description);
  
  return (
    <div className="group w-full max-w-md mx-auto overflow-hidden flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Image Container with Overlay */}
      <Link href={`/posts/${tagNames(post.title)}`} className="relative overflow-hidden">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={post.post_image}
            alt="post-image"
            className="h-full object-cover w-full transition-transform duration-700 group-hover:scale-110"
            width={400}
            height={256}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Read More Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <span className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-xl flex items-center gap-2">
              Read Article
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
          
          {/* Premium Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
              Featured
            </span>
          </div>
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Category and Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Technology
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            5 min read
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold leading-tight">
          <Link
            href={`/posts/${tagNames(post.title)}`}
            className="text-gray-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-amber-500 transition-all duration-300"
          >
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          className="line-clamp-3 text-gray-600 leading-relaxed flex-1"
        ></div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Footer with Author and Stats */}
        <div className="flex items-center justify-between pt-2">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">Author Name</p>
              <p className="text-gray-500 text-xs">2 days ago</p>
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1 hover:text-purple-600 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              24
            </span>
            <span className="flex items-center gap-1 hover:text-amber-600 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              1.2k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;