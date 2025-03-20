"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import GoogleButton from 'react-google-button'

import useAuthStore from "@/store/store";


const Navbar = () => {
  const { signInWithGitHub, fetchUser, user, signOut,signInWithGoogle } = useAuthStore(
    (state) => state
  );

  useEffect(() => {
    const getSession = async () => {
      await fetchUser();
    };

    getSession();
  }, []);




  async function signGithub() {
    

    await signInWithGitHub();

    
  }

  return (
    <header className="w-full bg-[#900024] py-5 flex justify-between px-4 md:px-10 items-center">
      {/* Logo */}
      <Link href="/" className="text-xl md:text-3xl text-white md:font-bold">
        Blog2Go
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-6 pr-10">
        {/* Home with Dropdown */}
        <li className="relative group">
          <Link
            href="/"
            className="text-white hover:text-gray-300 text-base md:text-2xl font-bold md:font-light leading-3"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/posts/add-post"
            className="text-white hover:text-gray-300 text-base md:text-2xl font-bold md:font-light leading-3"
          >
            Add
          </Link>
        </li>

        <li className="relative group">
          <Link
            href={`/categories`}
            className="text-white capitalize hover:text-gray-300 text-base md:text-2xl font-bold md:font-light leading-3"
          >
            Categories
          </Link>
        </li>
      </ul>
      {!user && (
        <div className="hidden md:block md:ml-6">
          <div className="flex gap-4 items-center">
            <button
              onClick={signGithub}
              className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            >
              <FaGithub className="text-white mr-2" />
              <span>login With GitHub</span>
            </button>
              <GoogleButton onClick={async()=> await signInWithGoogle()} className="text-red-900 mr-2" />
          </div>
        </div>
      )}
      {user && (
        <button
          onClick={() => {
            signOut();
          }}
          className="block px-4 py-2 text-sm text-white"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-2"
        >
          Sign Out
        </button>
      )}

      {/* Additional Branding */}
    </header>
  );
};

export default Navbar;
