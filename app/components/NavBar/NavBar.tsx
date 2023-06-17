"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sm:sticky top-0 z-50 bg-gray-custom p-6 text-lg flex justify-between items-center">
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex space-x-4 ml-auto`}
        >
          <Link
            href={"/"}
            className={`text-blue-custom font-semibold hover:text-blue-custom-darken hover:underline ${
              pathname === "/" && "underline"
            }`}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            className={`text-blue-custom font-semibold hover:text-blue-custom-darken hover:underline ${
              pathname.startsWith("/projects") && "underline"
            }`}
          >
            Projects
          </Link>
          <Link
            href={"/contact"}
            className={`text-blue-custom font-semibold hover:text-blue-custom-darken hover:underline ${
              pathname.startsWith("/contact") && "underline"
            }`}
          >
            Contact
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="sm:hidden text-blue-custom font-semibold ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
