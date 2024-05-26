"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal/Modal";
import NavItems from "./NavItems";
import Logo from "../Logo";

const Navbar = () => {
  //
  const [displayNavbar, setDisplayNavbar] = useState(false);

  return (
    <div>
      <nav className="bg-white border-gray-200 w-full z-50 navbar-shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <Link
            href="http://127.0.0.1:3000/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/logo.png" width={48} height={0} alt="logo" />
            <Logo />
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setDisplayNavbar((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <NavItems className="md:block hidden" onPageChange={() => {}} />
          {displayNavbar && (
            <Modal
              className={`block md:hidden`}
              onCloseModal={() => setDisplayNavbar(false)}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
