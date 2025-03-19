"use client";

import { searchBlogs } from "@/app/actions/getSinglePost";
import React, { useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");

  const submitSearch = async () => {
    let data = await searchBlogs(search);

    console.log(data);
  };

  return (
    <section>
      <div className="flex gap-4 py-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-8 placeholder:text-xl placeholder:font-light focus:outline-none focus:border-b focus:border-b-red-700"
          placeholder="Search You Favorite Topics"
        />
        <button
          onClick={submitSearch}
          className="bg-[#db0231cc] tracking-[3px] uppercase px-2 text-white py-2"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchComponent;
