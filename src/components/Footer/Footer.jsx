import { DOMAIN } from "@/utils/constants";
import { personalData, primaryMenu } from "@/utils/data";
import Link from "next/link";
import CName from "../CName";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 xl:px-0 px-4">
          <div className="md:flex md:justify-between">
            <div className="md:mb-0 mb-5">
              <Logo />
            </div>
            <div className="grid gap-8 sm:gap-6 grid-cols">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Useful links
                </h2>
                <ul className="text-gray-500 font-medium">
                  {primaryMenu.map((item, index) => {
                    return (
                      <li className="mb-3" key={index}>
                        <Link
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
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023{" "}
              <Link href={DOMAIN} className="hover:underline">
                <CName />™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center items-center sm:mt-0 gap-x-2">
              <Link
                href={personalData.MOBILE}
                className="text-gray-500 hover:text-gray-900 border-r-2 pr-2"
              >
                {personalData.MOBILE}
              </Link>

              <Link
                href={personalData.EMAIL}
                className="text-gray-500 hover:text-gray-900"
              >
                {personalData.EMAIL}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
