import getSinglePost from "@/app/actions/getSinglePost";
import React from "react";
import CardPost from "@/components/CardPost";
import getPosts, { getRelatedPost } from "@/app/actions/getPosts";
import SinglePageContent from "@/components/SinglePageContent";

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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-amber-500 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Post Not Found</h2>
          <p className="text-gray-600">
            The post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <SinglePageContent post={post} />

      {/* Related Posts Section */}
      <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            {/* Decorative Top Element */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-800 to-amber-600 bg-clip-text text-transparent">
              Continue Reading
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore more articles that might interest you
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-amber-500"></div>
              <div className="h-1 w-20 bg-gradient-to-l from-purple-500 to-amber-500 rounded-full"></div>
            </div>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {posts.map((post) => (
                <CardPost key={post.postID} post={post} />
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-16 px-4">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-amber-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No Related Posts Yet
              </h3>
              <p className="text-gray-600">
                Check back soon for more amazing content!
              </p>
            </div>
          )}

          {/* View All Button */}
          {posts.length > 0 && (
            <div className="text-center mt-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="flex items-center gap-2">
                  View All Articles
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-amber-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm font-medium text-white/90 tracking-wide">
                STAY UPDATED
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Never Miss a Post
            </h3>

            <p className="text-white/80 text-lg">
              Subscribe to our newsletter and get the latest articles delivered
              straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>

            <p className="text-white/60 text-sm mt-4">
              Join 10,000+ readers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;