"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  // const profileImage = session?.user?.image

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const provider = await getProviders();
      setProviders(provider);
    };

    setAuthProviders();
  }, []);

  console.log(providers, "providers");
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
      {!session && (
        <div className="hidden md:block md:ml-6">
          <div className="flex items-center">
            {providers &&
              Object.values(providers).map((provider, index) => (
                <button
                  key={index}
                  onClick={() => signIn(provider.id)}
                  className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  {/* {provider.id === "google" && <FaGoogle className='text-white mr-2' />} */}
                  {provider.id === "github" && (
                    <FaGithub className="text-white mr-2" />
                  )}
                  <span>Login or Register</span>
                </button>
              ))}
          </div>
        </div>
      )}
      {session && (
        <button
          onClick={() => {
            // setIsProfileMenuOpen(false)
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
