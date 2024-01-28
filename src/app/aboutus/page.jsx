import Container from "@/layouts/Container";
import Heading4 from "@/layouts/Heading4";
import React from "react";
import PortfolioCard from "@/components/PortfolioCard/page";
import { HandyMen, SERVICES } from "@/data/data";
import Card from "@/components/Card/page";
import BlockQuote from "@/components/BlockQuote/BlockQuote";
import { getServcies } from "../Helpers/helpers";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <section className="my-10">
        <Container>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">About Us</Heading4>
          </div>
          <div className="mb-4 py-4">
            <div className="rounded-lg shadow bg-[#F9FAFB] p-10">
              <div className="mb-3 text-black dark:text-black first-letter:text-blue-600 sm:first-letter:text-4xl sm:first-letter:font-bold first-letter:ml-4 first-letter:float-start text-justify">
                <span className="sm:ml-10"></span>
                Welcome to{" "}
                <span className="text-blue-600 font-semibold">
                  [company_name]
                </span>
                , where we're on a mission to transform ordinary bathrooms into
                extraordinary havens. We're genuinely excited to welcome you
                aboard this journey with us as we strive to redefine the very
                essence of bathroom experiences.
              </div>
              <div className="mb-3 text-black dark:text-black text-justify">
                <span className="sm:ml-10"></span>
                In the realm of{" "}
                <span className="text-blue-600 font-semibold">
                  [company_name]
                </span>
                , we view bathrooms as more than mere functional spaces; they're
                sacred sanctuaries where you kick off and wind down each day,
                deserving of a touch of luxury and comfort. Our commitment is
                rooted in elevating your everyday experience by seamlessly
                blending unparalleled opulence with unmatched functionality. We
                want your bathroom to be a place that not only meets your
                practical needs but also becomes a source of indulgence and
                relaxation.
              </div>
              <div className="mb-3 text-black dark:text-black text-justify">
                <span className="sm:ml-10"></span>
                Imagine stepping into a world where every aspect of your
                bathroom is not just stunning but also superior in its
                functionality.
                <span className="text-blue-600 font-semibold">
                  [company_name]
                </span>{" "}
                is more than a design-centric entity; it's a conduit for turning
                your dream bathroom into a tangible reality. Here, every minute
                detail, regardless of its size, is meticulously considered and
                perfected with you in mind. We invite you to embark on the
                [company_name] experience with us, where together, we can
                transform your bathroom into a personal haven of indulgence,
                comfort, and style. Here's to making every day a bit more
                indulgent!
              </div>
              The{" "}
              <span className="text-blue-600 font-semibold">
                [company_name]
              </span>{" "}
              Team
            </div>
          </div>
        </Container>
      </section>

      <section className="border-blue-400 my-20 py-10 bg-[${bg1}]">
        <Container>
          <BlockQuote>[company name] - Crafting Your Dream Bathroom</BlockQuote>
        </Container>
      </section>

      <section className="py-5 lg:bg-[#F9FAFB]">
        <Container>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">
              Our service areas
            </Heading4>
          </div>
          <div className="my-4">
            <div className="grid gap-5 grid-flow-row grid-cols-1 sm:grid-cols-2 my-10">
              {getServcies(8, 16).map((service, index) => {
                return (
                  <Card
                    key={index}
                    className="mx-auto bg-[#F9FAFB]"
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                  />
                );
              })}
            </div>
            <div className="flex justify-center items-center mt-10">
              <Link href={"/services"} className="">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn-shadow"
                >
                  See More ...
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-10">
        <Container>
          <div className="text-left font-medium text-3xl sm:text-4xl md:text-5xl mb-5 leading-10 md:leading-snug text-gray-900">
            We are your trusted partners for all plumbing needs, providing
            reliable solutions to tailor task
          </div>

          <Heading4 className="text-blue-600 capitalize">
            about handymans
          </Heading4>
        </Container>
        <div className="my-4 bg-blue-gradiant py-4">
          <Container>
            <div className="grid gap-5 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-3">
              {HandyMen.map((man, index) => {
                return (
                  <PortfolioCard
                    key={index}
                    className="mx-auto"
                    name={man.name}
                    role={man.role}
                    imageUrl={man.imageUrl}
                  />
                );
              })}
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
