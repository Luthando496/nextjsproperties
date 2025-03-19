"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { supabase } from "@/utils/connectDB";
import useAuthStore from "@/store/store";
import { getSessionUser } from "@/utils/getSession";

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

  // const profileImage = session?.user?.image

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  // useEffect(() => {
  //   const setAuthProviders = async () => {
  //     const provider = await getProviders();
  //     setProviders(provider);
  //   };

  //   setAuthProviders();
  // }, []);

  async function signGithub() {
    

    await signInWithGitHub();

    if (error) {
      console.error("GitHub Login Error:", error.message);
    } else {
      console.log("Login Successful:", data);
    }
  }

  return (
    <header className="w-full bg-[#900024] py-5 flex justify-between px-10 items-center">
      {/* Logo */}
      <Link href="/" className="text-3xl text-white font-bold">
        Next.js Blog
      </Link>

      {/* Navigation */}
      <ul className="hidden lg:flex items-center gap-6 pr-10">
        {/* Home with Dropdown */}
        <li className="relative group">
          <Link
            href="/"
            className="text-white hover:text-gray-300 text-2xl font-light leading-3"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/posts/add-post"
            className="text-white hover:text-gray-300 text-2xl font-light leading-3"
          >
            Add
          </Link>
        </li>

        <li className="relative group">
          <Link
            href={`/categories`}
            className="text-white capitalize hover:text-gray-300 text-2xl font-light leading-3"
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
              <span>Login or Register</span>
            </button>
            <button
              onClick={async()=> await signInWithGoogle()}
              className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            >
              <FaGoogle className="text-white mr-2" />
              <span>Login or Register</span>
            </button>
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
