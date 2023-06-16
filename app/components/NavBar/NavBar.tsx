"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-custom flex justify-start space-x-4 p-4 text-lg">
      <Link
        href={"/"}
        className={`text-blue-custom font-semibold hover:border-b-2 hover:border-blue-custom-darken hover:pb-1 ${
          pathname === "/" && "border-b-2 border-blue-custom-darken pb-1"
        }`}
      >
        Home
      </Link>
      <Link
        href={"projects"}
        className={`text-blue-custom font-semibold hover:border-b-2 hover:border-blue-custom-darken hover:pb-1 ${
          pathname.startsWith("/projects") &&
          "border-b-2 border-blue-custom-darken pb-1"
        }`}
      >
        Projects
      </Link>
      <Link
        href={"contact"}
        className={`text-blue-custom font-semibold hover:border-b-2 hover:border-blue-custom-darken hover:pb-1 ${
          pathname.startsWith("/contact") &&
          "border-b-2 border-blue-custom-darken pb-1"
        }`}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
