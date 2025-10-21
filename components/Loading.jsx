"use client";

export default function Loading() {
  // You can adjust the number of skeleton cards by changing `Array(3)`
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center space-y-6">
      {/* Skeleton post cards */}
      {Array(1)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 animate-pulse"
          >
            {/* Image placeholder */}
            <div className="h-36 w-full bg-gray-200 dark:bg-gray-700 rounded-xl mb-5" />

            {/* Title + metadata */}
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
            <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mb-5" />

            {/* Content lines */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-3 w-4/5 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
    </div>
  );
}
