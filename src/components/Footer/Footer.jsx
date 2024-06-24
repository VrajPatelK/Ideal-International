import Container from "@/layouts/Container";
import { DOMAIN } from "@/utils/constants";
import { personalData, primaryMenu } from "@/utils/data";
import Link from "next/link";
import CName from "../CName";
import Logo from "../Logo";

const Footer = () => {
  return (
    <Container>
      <footer className="bg-white">
        <div className="mx-auto w-full py-6 lg:py-8 xl:px-0 px-4">
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
          <hr className="my-6 sm:mx-auto lg:my-8" />
          <div className="lg:flex lg:justify-between">
            <div className="lg:mb-0 mb-2 sm:flex items-center justify-center">
              <div className="flex justify-center">
                <Link
                  href={`https://wa.me/917575802028`}
                  className="text-gray-500 hover:text-gray-900 sm:border-r-2 sm:pr-2"
                  target="_blank"
                >
                  {personalData.MOBILE}
                </Link>
              </div>
              <div className="flex justify-center">
                <Link
                  href={`mailto:${personalData.EMAIL}`}
                  className="text-gray-500 hover:text-gray-900 sm:pl-2"
                  target="_blank"
                >
                  {personalData.EMAIL}
                </Link>
              </div>
            </div>
            <div className="lg:block flex justify-center">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2023{" "}
                <Link href={DOMAIN} className="hover:underline">
                  <CName />™
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
