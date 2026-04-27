"use client";
import Image from "next/image";
import React from "react";
import userAvater from "@/assets/user.png";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-8">
      <div></div>
      <ul className="flex justify-center items-center gap-3 text-lg text-gray-700 font-medium ml-25">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      {isPending ? (
        <span className="loading loading-spinner loading-md text-purple-700"></span>
      ) : user ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <h2 className="font-medium text-gray-700 dark:text-gray-200">
              Hello, <span className="font-bold">{user?.name}</span>
            </h2>

            {/* Avatar Container */}
            <div className="relative h-12 w-12 rounded-full ring-2 ring-gray-100 dark:ring-gray-800 transition-all hover:scale-105 shadow-sm overflow-hidden">
              <Image
                src={user?.image || userAvater}
                alt="user avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={async () => await authClient.signOut()}
            className="btn bg-purple-700 text-white hover:bg-purple-800 px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      ) : (
        /* Login Button */
        <Link
          href="/login"
          className="btn bg-purple-700 text-white hover:bg-purple-800 px-4 py-2 rounded-md transition-colors"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
