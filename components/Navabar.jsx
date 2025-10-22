"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import GoogleButton from 'react-google-button'

import useAuthStore from "@/store/store";

const Navbar = () => {
  const { signInWithGitHub, fetchUser, user, signOut, signInWithGoogle } = useAuthStore(
    (state) => state
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      await fetchUser();
    };

    getSession();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function signGithub() {
    await signInWithGitHub();
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10 border-b border-white/10' 
          : 'bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold tracking-tight hover:scale-105 transition-transform duration-200"
          >
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Blog
            </span>
            <span className="text-white">2Go</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-white/80 hover:text-white text-base font-medium transition-all duration-200 relative group"
              >
                Home
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </li>

            <li>
              <Link
                href="/posts/add-post"
                className="text-white/80 hover:text-white text-base font-medium transition-all duration-200 relative group"
              >
                Add Post
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </li>

            <li>
              <Link
                href="/search-page"
                className="text-white/80 hover:text-white text-base font-medium transition-all duration-200 relative group"
              >
                Search
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </li>
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <>
                <button
                  onClick={signGithub}
                  className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 transition-all duration-200 hover:scale-105"
                >
                  <FaGithub className="text-lg" />
                  <span className="font-medium text-sm">GitHub</span>
                </button>
                <button
                  onClick={async () => await signInWithGoogle()}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium text-sm rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Google</span>
                </button>
              </>
            ) : (
              <button
                onClick={signOut}
                className="px-5 py-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 border border-white/20"
              >
                Sign Out
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-t border-white/10 shadow-xl shadow-purple-500/10">
            <ul className="flex flex-col py-4">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/posts/add-post"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  Add Post
                </Link>
              </li>
              <li>
                <Link
                  href="/search-page"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
                >
                  Search
                </Link>
              </li>
              
              {/* Mobile Auth */}
              <li className="px-6 py-4 border-t border-white/10 mt-2">
                {!user ? (
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        signGithub();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 transition-all"
                    >
                      <FaGithub className="text-xl" />
                      <span className="font-medium">Login with GitHub</span>
                    </button>
                    <button
                      onClick={async () => {
                        await signInWithGoogle();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span>Login with Google</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg font-medium transition-all"
                  >
                    Sign Out
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;