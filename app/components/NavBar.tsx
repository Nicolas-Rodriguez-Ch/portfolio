"use client";
import { usePathname } from "next/navigation";
import { links } from "../../utils/links";
import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.scss";
import Image from "next/image";
import Links from "./Links";
import Link from "next/link";
import { assets } from "@/utils/assets";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDesktop = () => window.innerWidth >= 768;
  const toggleMenu = () => {
    if (!isDesktop()) {
      setMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = (e: MouseEvent) => {
    if (!(e.target as Element).closest(`.${styles.navbar}`)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} sm:sticky top-0 z-50 bg-gray-custom p-6 text-lg flex justify-between items-center relative sm:w-full`}
    >
      <Link href="/">
        <Image
          src={assets.logo}
          alt="logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </Link>
      <button
        onClick={toggleMenu}
        className="sm:hidden text-blue-custom font-semibold ml-auto z-10 transition-all duration-200 ease-in-out"
      >
        {isMenuOpen ? (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
        )}
      </button>
      <div
        className={`absolute sm:static top-full right-0 w-full sm:w-auto overflow-hidden transition-all duration-500 ease-in-out bg-white sm:bg-transparent bg-opacity-90 ${
          isMenuOpen
            ? "max-h-screen sm:max-h-none py-4"
            : "max-h-0 sm:max-h-none py-0"
        } flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 sm:justify-end`}
      >
        {links.map((link) => (
          <Links
            key={link.href}
            href={link.href}
            text={link.text}
            toggleMenu={toggleMenu}
            pathname={pathname}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;