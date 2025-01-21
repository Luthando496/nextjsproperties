import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  return (
    <header className="w-full bg-[#900024] py-5 flex justify-between px-10 items-center">
      {/* Logo */}
      <Link href="/" className="text-3xl text-white font-bold">Next.js Blog</Link>

      {/* Navigation */}
      <ul className="flex items-center gap-6 pr-10">
        {/* Home with Dropdown */}
        <li className="relative group">
          <Link
            href="/"
            className="text-white hover:text-gray-300 text-2xl font-light leading-3"
          >
            Home
          </Link>

          {/* Dropdown Menu */}
          <div className="hidden group-hover:block bg-white py-4 px-6 text-center absolute top-full left-0 shadow-lg w-48 z-10">
            <Link
              href="/posts"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Latest Posts
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Categories
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Contact Us
            </Link>
          </div>
        </li>

        {/* About */}
        <li>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 text-2xl font-light leading-3"
          >
            About
          </Link>
        </li>

        {/* About */}
        <li className="relative group">
          <Link
            href="/cars"
            className="text-white  hover:text-gray-300 text-2xl font-light leading-3"
          >
            Automobile 
          </Link>
          {/* Dropdown Menu */}
          <div className="hidden group-hover:block bg-white py-4 px-6 text-center absolute top-full left-0 shadow-lg w-48 z-10">
            <Link
              href="/posts"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Ferrari
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Mercedes
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Aston Martin
            </Link>
          </div>
        </li>
        {/* About */}
        <li className="relative group">
          <Link
            href="/cars"
            className="text-white hover:text-gray-300 text-2xl font-light leading-3"
          >
            Automobile
          </Link>
          {/* Dropdown Menu */}
          <div className="hidden group-hover:block bg-white py-4 px-6 text-center absolute top-full left-0 shadow-lg w-48 z-10">
            <Link
              href="/posts"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Latest Posts
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Categories
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Contact Us
            </Link>
          </div>
        </li>
        {/* Tech */}
        <li className="relative group">
          <Link
            href="/tech"
            className="text-white hover:text-gray-300 text-2xl font-light leading-3"
          >
            Technology 
          </Link>
          {/* Dropdown Menu */}
          <div className="hidden group-hover:block bg-white py-4 px-6 text-center absolute top-full left-0 shadow-lg w-48 z-10">
            <Link
              href="/posts"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Latest Posts
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Categories
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#900024] hover:border-b-2  text-xl py-2 block"
            >
              Contact Us
            </Link>
          </div>
        </li>
      </ul>

      {/* Additional Branding */}
    </header>
  );
};

export default Navbar;
