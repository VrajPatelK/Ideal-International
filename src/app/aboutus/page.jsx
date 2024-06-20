import BlockQuote from "@/components/BlockQuote/BlockQuote";
import CName from "@/components/CName";
import Card from "@/components/Card/page";
import Container from "@/layouts/Container";
import Heading4 from "@/layouts/Heading4";
import Link from "next/link";
import { getServcies } from "../Helpers/helpers";
import { openGraphImage } from "../shared-metadata";

const AboutUs = () => {
  return (
    <div>
      <section className="my-10">
        <Container>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">About Us</Heading4>
          </div>
          <div className="mb-4 py-4">
            <div className="rounded-lg shadow bg-[#F9FAFB] py-10 sm:px-10 px-6">
              <div className="mb-3 text-black first-letter:text-blue-600 sm:first-letter:text-4xl sm:first-letter:font-bold first-letter:ml-4 first-letter:float-start text-justify">
                <span className="sm:ml-10"></span>
                Welcome to <CName /> - your one-stop destination for all your
                bathroom needs! Based in Ahmedabad, we pride ourselves on
                delivering top-notch bath-oriented services to transform your
                bathroom into a modern, functional, and luxurious space. At{" "}
                <CName />, we understand that your bathroom is more than just a
                utility space; it's a sanctuary where you start and end your
                day. Our team of experienced professionals is dedicated to
                providing personalized solutions that cater to your unique style
                and requirements. From minor repairs to complete renovations, we
                offer a wide range of services to meet all your bathroom needs.
              </div>
              <div className="mb-3 text-black text-justify">
                <span className="sm:ml-10"></span>
                Your ultimate destination for all bathroom needs!, we are
                committed to delivering top-notch bath-oriented services that
                will transform your bathroom into a modern, functional, and
                luxurious space.
              </div>
              <div className="mb-3 text-black text-justify">
                <span className="sm:ml-10"></span>
                Imagine stepping into a world where every aspect of your
                bathroom is not just stunning but also superior in its
                functionality.
                <CName /> is more than a design-centric entity; it&apos;s a
                conduit for turning your dream bathroom into a tangible reality.
                Here, every minute detail, regardless of its size, is
                meticulously considered and perfected with you in mind. We
                invite you to embark on the <CName /> experience with us, where
                together, we can transform your bathroom into a personal haven
                of indulgence, comfort, and style. Here&apos;s to making every
                day a bit more indulgent!
              </div>
              The <CName /> Team
            </div>
          </div>
        </Container>
      </section>

      <section className="border-blue-400 my-20 py-10 bg-[${bg1}]">
        <Container>
          <BlockQuote>
            <CName /> - Crafting Your Dream Bathroom
          </BlockQuote>
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
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center"
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
            Why Choose <CName />?
          </Heading4>
        </Container>
        <div className="my-4 bg-blue-gradiant py-4">
          <Container>
            <ul className="text-justify space-y-1 list-disc list-inside sm:text-lg">
              <li>
                <strong> Experienced Professionals:</strong> Our team skilled
                plumbers who bring years of experience and expertise to every
                project.
              </li>
              <li>
                <strong>Quality Materials: </strong>We use only high-quality
                materials and fixtures to ensure durability and long-lasting
                results.
              </li>
              <li>
                <strong> Customer Satisfaction:</strong> Your satisfaction is
                our top priority. We provide warranties on our services and
                excellent after-service support.
              </li>
              <li>
                <strong> Affordable Pricing:</strong> We offer competitive and
                transparent pricing with no hidden charges, ensuring you get the
                best value for your money.
              </li>
              <li>
                <strong> Comprehensive Services:</strong> From plumbing repairs
                and installations to bathroom remodeling and luxury additions,
                we cover all aspects of bathroom improvement and maintenance.
              </li>
            </ul>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${openGraphImage.title} - About Us`,
    description: openGraphImage.description,
  };
}
