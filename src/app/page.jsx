import Container from "@/layouts/Container";
import Link from "next/link";
import Image from "next/image";
import Heading4 from "@/layouts/Heading4";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Counter from "@/components/Counter/Counter";

import home01 from "../../public/home-01.png";
import home02 from "../../public/home-02.png";
import { STATICS } from "@/data/data";
import { getServcies } from "./Helpers/helpers";

export default function Home() {
  return (
    <div>
      <section className="bg-blue-gradiant">
        <Container>
          <div className="rounded-lg lg:grid lg:grid-cols-2 lg:gap-3 pt-12 pb-5 px-5">
            <div className="col-span-1 py-5 ml-auto">
              <div className="text-left font-bold sm:text-5xl text-2xl w-fit leading-tight">
                Smart, Stylish,
                <br />
                <span className="text-blue-600">Sustainable</span>
              </div>
              <div className="mt-5">
                Redefining Bathware for Modern Living. Embrace the future of
                bathrooms with our smart, stylish, and eco-friendly
                solutions.Discover a range of styles and personalized solutions
                that make every bathroom uniquely yours.From vision to reality,
                our services redefine the art of bathing, focusing on your
                comfort and style.
              </div>
              <div className="mt-5">
                <Link href={"/contact"}>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:block hidden col-span-1 py-5 relative">
              <Image
                src={home01}
                alt="home01"
                className="border w-auto sm:h-[70vh] rounded-lg shadow-md ml-auto"
              />
              <div className="bg-blue-700 text-white font-bold rounded-[50%] flex w-[130px] h-[130px] absolute -right-20 bottom-10 border-white border-4">
                <p className="text m-auto">9.3 Ratings</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-10">
        <Container>
          <div className="text-left font-medium text-xl sm:text-4xl md:text-5xl mb-5 leading-8 sm:leading-10 md:leading-snug text-gray-900">
            Want to spend less time working in your handymans more time provide
            the best plumbing services.
          </div>

          <Heading4 className="text-blue-600 capitalize">
            Plumbing services
          </Heading4>
        </Container>

        <div className="my-4 py-4">
          <Container>
            <div className="grid gap-5 grid-flow-row grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-3">
              {getServcies(0, 6)?.map((service, index) => {
                return (
                  <ServiceCard
                    key={index}
                    className="mx-auto bg-dark-blue-gradiant"
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                  />
                );
              })}
            </div>
          </Container>
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
      </section>

      <section className="my-4 bg-[#F9FAFB] py-4">
        <Container>
          <div className="xl:block hidden font-medium w-10/12 mx-auto md:text-6xl mb-5 md:leading-snug text-gray-900">
            <p className="mr-auto w-fit">We provide stunning </p>
            <p className="ml-auto w-fit"> best bathware services</p>
          </div>
          <div className="text-left font-medium text-2xl sm:text-4xl md:text-5xl mb-5 leading-10 md:leading-snug block xl:hidden text-gray-900">
            We build stunning best handyman services agency
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3 mt-10">
            <div className="col-span-1 xl:block hidden">
              <Image
                src={home02}
                alt="home02"
                className="w-auto sm:h-[60vh] rounded-lg shadow-md mr-auto"
              />
            </div>

            <div className="col-span-2 flex">
              <div className="lg:w-2/3">
                <div className="my-2">
                  <Heading4>
                    <span className="text-blue-600">
                      Upgrade Your Daily Routine:
                    </span>{" "}
                    <span className="text-gray-700">
                      Experience Exceptional Bathrooms Like Never Before!
                    </span>
                  </Heading4>
                </div>
                <div className="mt-5 text-justify">
                  Step into a world where your everyday moments become
                  extraordinary. We're here to transform your bathroom into a
                  stunning haven of luxury and practicality. Imagine designs
                  that catch your eye and flawless installations that turn each
                  element into a work of art. We're not just about looks – we're
                  about making your daily routines feel like indulgent
                  experiences. Our bathware services redefine what a truly
                  exceptional bathroom should be. It's where style and quality
                  meet to create a bathroom that's not just beautiful but also
                  functional. Join us on a journey where your dream bathroom
                  becomes a reality, and every detail is perfected just for you.
                </div>
              </div>

              <div className="border-red-200 w-1/3 text-right lg:block hidden">
                {STATICS.map((data, index) => {
                  return (
                    <Counter
                      key={index}
                      start={data.start}
                      end={data.end}
                      duration={data.duration}
                      text={data.text}
                      prefix={data.prefix}
                      className="ml-auto"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-red-200 mt-5 col-span-3 justify-between lg:hidden grid sm:grid-cols-2 grid-cols-1">
            {STATICS.map((data, index) => {
              return (
                <div className="flex justify-center items-center m-2 shadow rounded-2xl">
                  <Counter
                    key={index}
                    start={data.start}
                    end={data.end}
                    duration={data.duration}
                    text={data.text}
                    prefix={data.prefix}
                    cntclassName="text-blue-600 text-2xl"
                    txtclassName="text-lg"
                    className="text-center"
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
