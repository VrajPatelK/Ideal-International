import React from "react";
import Link from "next/link";
import { primaryMenu, followUsMenu } from "@/data/data";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="http://127.0.0.1:3000/" className="flex items-center">
                <img src="/logo.png" className="w-12 h-auto mr-2" alt="logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Plumbing
                </span>
              </Link>
            </div>
            <div className="grid gap-8 sm:gap-6 grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Useful links
                </h2>
                <ul className="text-gray-500 font-medium">
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
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link href={primaryMenu[2].url} className="hover:underline">
                      {primaryMenu[2].name}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023{" "}
              <Link href="http://127.0.0.1:3000/" className="hover:underline">
                [plumbing]™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center items-center sm:mt-0 gap-x-2">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 border-r-2 pr-2"
              >
                +91 99134 13030
              </Link>

              <Link href="#" className="text-gray-500 hover:text-gray-900">
                abc@123gmail.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
