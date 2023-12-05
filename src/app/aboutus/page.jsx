import Container from "@/layouts/Container";
import Heading4 from "@/layouts/Heading4";
import React from "react";
import PortfolioCard from "@/components/PortfolioCard/page";
import { HandyMen, DUMMY_SERVICES } from "@/data/data";
import Card from "@/components/Card/page";
import BlockQuote from "@/components/BlockQuote/BlockQuote";

const AboutUs = () => {
  return (
    <div>
      <section className="my-10">
        <Container>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">About Us</Heading4>
          </div>
          <div className="my-4 rounded-lg">
            {/*shadow-lg p-6 */}

            <div className="mb-3 text-black dark:text-black first-letter:text-blue-600 sm:first-letter:text-4xl sm:first-letter:font-bold first-letter:ml-4 first-letter:float-start text-justify">
              <span className="sm:ml-10"></span>
              We are a plumbing agencys from water counseling. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Est ullam temporibus
              itaque, culpa facilis minus! Eaque eum consectetur neque deserunt?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aspernatur aliquid, explicabo id aut doloremque soluta maxime vero
              dignissimos atque iste. Distinctio, modi eligendi. Illo,
              aspernatur perferendis. Praesentium magnam dolores ipsam ea
              aperiam aut aspernatur voluptas placeat, neque dolorum possimus
              animi nemo maiores nesciunt impedit quis iste accusamus
              accusantium eaque.
            </div>
            <div className="mb-3 text-black dark:text-black text-justify">
              <span className="sm:ml-10"></span>
              At{" "}
              <span className="text-blue-600 font-bold">
                [Your Company Name]
              </span>
              , we don't just fix pipes; we mend connections and build trust.
              With a commitment to excellence, our team of skilled plumbers is
              dedicated to delivering top-notch services that go beyond the
              surface. We believe in the power of reliable plumbing to transform
              spaces and improve lives. From leaky faucets to intricate
              installations, we handle every job with precision,
              professionalism, and a personal touch. Your satisfaction is not
              just our goal; it's our standard. Welcome to a plumbing experience
              where quality meets care, and your peace of mind flows freely."
              Feel free to customize it based on your company's values, mission,
              and unique selling points.
            </div>
          </div>
        </Container>
      </section>

      <section className="border-blue-400 my-20 py-10 bg-[${bg1}]">
        <Container>
          <BlockQuote>
            Flowing Solutions, Lasting Impressions: Crafting Excellence in Every
            Pipe, Every Home.
          </BlockQuote>
        </Container>
      </section>

      <section className="py-5 bg-[#F9FAFB]">
        <Container>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">
              Our service areas
            </Heading4>
          </div>
          <div className="my-4">
            <div className="grid gap-5 grid-flow-row grid-cols-1 sm:grid-cols-2 my-10">
              {DUMMY_SERVICES.map((service, index) => {
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
