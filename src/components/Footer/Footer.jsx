import React from "react";
import Link from "next/link";
import { primaryMenu, followUsMenu } from "@/data/data";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="http://127.0.0.1:3000/" className="flex items-center">
                <img src="/logo.png" className="w-12 h-auto mr-2" alt="logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Plumbing
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Useful links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {primaryMenu.map((item, index) => {
                    return (
                      <li className="mb-3">
                        <Link
                          key={index}
                          href={item.url}
                          aria-current="page"
                          className="hover:underline "
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {followUsMenu.map((item, index) => {
                    return (
                      <li className="mb-3">
                        <Link
                          key={index}
                          href={item.url}
                          aria-current="page"
                          className="hover:underline "
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/policies" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link href="http://127.0.0.1:3000/" className="hover:underline">
                [plumbing]™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center items-center sm:mt-0">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white bg-blue-500 px-3 w-8 h-8 flex rounded-full"
              >
                <svg
                  className="w-6 h-6 m-auto"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 p-2 rounded-full"
              >
                <svg
                  className="w-10 h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 64"
                >
                  <radialGradient
                    id="TGwjmZMm2W~B4yrgup6jda_119026_gr1"
                    cx="32"
                    cy="32.5"
                    r="31.259"
                    gradientTransform="matrix(1 0 0 -1 0 64)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#efdcb1"></stop>
                    <stop offset="0" stopColor="#f2e0bb"></stop>
                    <stop offset=".011" stopColor="#f2e0bc"></stop>
                    <stop offset=".362" stopColor="#f9edd2"></stop>
                    <stop offset=".699" stopColor="#fef4df"></stop>
                    <stop offset="1" stopColor="#fff7e4"></stop>
                  </radialGradient>
                  <path
                    fill="url(#TGwjmZMm2W~B4yrgup6jda_119026_gr1)"
                    d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"
                  ></path>
                  <radialGradient
                    id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2"
                    cx="18.51"
                    cy="66.293"
                    r="69.648"
                    gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".073" stopColor="#eacc7b"></stop>
                    <stop offset=".184" stopColor="#ecaa59"></stop>
                    <stop offset=".307" stopColor="#ef802e"></stop>
                    <stop offset=".358" stopColor="#ef6d3a"></stop>
                    <stop offset=".46" stopColor="#f04b50"></stop>
                    <stop offset=".516" stopColor="#f03e58"></stop>
                    <stop offset=".689" stopColor="#db359e"></stop>
                    <stop offset=".724" stopColor="#ce37a4"></stop>
                    <stop offset=".789" stopColor="#ac3cb4"></stop>
                    <stop offset=".877" stopColor="#7544cf"></stop>
                    <stop offset=".98" stopColor="#2b4ff2"></stop>
                  </radialGradient>
                  <path
                    fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)"
                    d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
                  ></path>
                  <circle cx="41" cy="25" r="2" fill="#fff"></circle>
                </svg>
                <span className="sr-only">Discord community</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
