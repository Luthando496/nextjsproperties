"use client";

import MyEditor from "@/components/Tiptap";
import useAuthStore from "@/store/store";

const page = () => {
  const { user } = useAuthStore((state) => state);
  if (!user) {
    return (
      <section className="h-screen text-center flex justify-center items-center">
        <h1 className="text-5xl font-bold text-red-500">
          Please login to add post
        </h1>
      </section>
    );
  }

  return (
    <>
      <section className="my-28">
        <MyEditor />
      </section>
    </>
  );
};

export default page;
