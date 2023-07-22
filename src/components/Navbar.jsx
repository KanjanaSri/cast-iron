import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center justify-center text-white text-lg cursor-pointer"
        >
          Cast<span className="text-red-500 px-1">Iron</span>
        </Link>

        <ul className="hidden md:flex text-white gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Explore</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
        </ul>

        <button className="hidden py-2 md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px] duration-500">
          Sign in
        </button>

        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black flex-col w-full mx-8 pt-14 pb-10 text-white gap-6 text-[14px]`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Explore</NavLink>
        <NavLink to="/">About</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
