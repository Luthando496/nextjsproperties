"use client";

import { searchBlogs } from "@/app/actions/getSinglePost";
import React, { useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");

  const submitSearch = async () => {
    let data = await searchBlogs(search);

    
  };

  return (
    <section className="flex justify-center mx-auto">
      <div className="flex gap-4 py-5 ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-8 md:placeholder:text-md placeholder:font-light focus:outline-none focus:border-b focus:border-b-red-700 border-b border-b-slate-950"
          placeholder="Search Your Favorite Topics"
        />
        <button
          onClick={submitSearch}
          className="bg-[#db0231cc] tracking-[3px] uppercase px-2 text-white py-2 "
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchComponent;
