"use client";
import Image from "next/image";
import React, { useState } from "react";
import userAvater from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Menu, X } from "lucide-react"; // Install lucide-react or use SVG

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = session?.user;

  return (
    <nav className="relative max-w-7xl mx-auto px-4 py-4 md:py-8">
      <div className="flex justify-between items-center">
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links - Hidden on Mobile */}
        <ul className="hidden md:flex justify-center items-center gap-6 text-lg text-gray-700 font-medium">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/about">About</NavLink></li>
          <li><NavLink href="/career">Career</NavLink></li>
        </ul>

        {/* User Actions Section */}
        <div className="flex items-center gap-3 md:gap-4">
          {isPending ? (
            <span className="loading loading-spinner loading-md text-purple-700"></span>
          ) : user ? (
            <div className="flex items-center gap-2 md:gap-4">
              <h2 className="hidden sm:block font-medium text-gray-700">
                Hello, <span className="font-bold">{user?.name?.split(" ")}</span>
              </h2>

              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full ring-2 ring-gray-100 overflow-hidden shadow-sm">
                <Image
                  src={user?.image || userAvater}
                  alt="user avatar"
                  fill
                  className="object-cover"
                />
              </div>

              <button
                onClick={async () => await authClient.signOut()}
                className="hidden md:block bg-purple-700 text-white hover:bg-purple-800 px-5 py-2 rounded-md font-medium transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-2 rounded-md font-medium transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl z-50 py-6 px-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700">
            <li onClick={() => setIsMenuOpen(false)}><NavLink href="/">Home</NavLink></li>
            <li onClick={() => setIsMenuOpen(false)}><NavLink href="/about">About</NavLink></li>
            <li onClick={() => setIsMenuOpen(false)}><NavLink href="/career">Career</NavLink></li>
          </ul>
          {user && (
             <button
             onClick={async () => await authClient.signOut()}
             className="w-full bg-red-50 text-red-600 border border-red-100 py-3 rounded-md font-bold mt-2"
           >
             Logout
           </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;