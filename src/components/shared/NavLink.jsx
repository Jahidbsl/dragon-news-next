"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={
        isActive ? "text-purple-700 border-b-2 border-purple-700 " : "text-gray-700"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
