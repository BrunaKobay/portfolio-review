"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#f5dcf5] ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-2 px-4 py-2 md:px-10">
        <Link href={"/"} className="text-2xl md:text-5xl font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 hover:text-cyan-900 hover:border-black"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-600 hover:text-cyan-900 hover:border-black"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
