"use client";

import { primaryMenu } from "@/data/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

//
const activeClass =
  "block py-2 px-3 text-blue-600 bg-white rounded md:bg-blue-50 md:text-blue-700 md:px-5 md:border-0 font-semibold";
const passiveClass =
  "block py-2 px-3 text-white hover:text-gray-900 rounded hover:bg-gray-100 md:text-black md:hover:bg-gray-50 md:border-0 font-semibold md:hover:text-blue-700 md:px-5";

const NavItems = (props) => {
  //
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className={"w-full md:w-auto " + props.className} id="navbar-default">
      <ul className="font-medium flex flex-col py-4 md:p-0 rounded-lg md:flex-row md:items-center md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        {primaryMenu.map((item, index) => {
          return (
            <li key={index} onClick={() => props.onPageChange()}>
              <Link
                href={item.url}
                className={isActive(item.url) ? activeClass : passiveClass}
                aria-current="page"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavItems;
