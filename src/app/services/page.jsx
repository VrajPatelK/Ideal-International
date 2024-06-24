import CName from "@/components/CName";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import Container from "@/layouts/Container";
import Heading4 from "@/layouts/Heading4";
import { getServcies } from "../Helpers/helpers";
import { openGraphImage } from "../shared-metadata";

const Services = () => {
  return (
    <div>
      <section className="my-10">
        <Container>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">Services</Heading4>
          </div>
        </Container>
        <div className="mb-4 py-4">
          <Container>
            <div className="grid gap-5 grid-flow-row grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-3">
              {getServcies()?.map((service, index) => {
                return (
                  <ServiceCard
                    key={index}
                    className="bg-dark-blue-gradiant"
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                  />
                );
              })}
            </div>
            <div className="mt-8 mb-4">
              <Heading4 className="text-blue-600 capitalize text-xl">
                And Many More!{" "}
              </Heading4>
            </div>
            <div className="text-justify">
              At <CName />, our expertise goes beyond the listed services. We
              are committed to addressing all your bathroom needs with
              comprehensive solutions tailored to your preferences. Whether you
              need minor repairs, custom installations, or complete renovations,
              our team is equipped to handle it all. We provide a wide array of
              additional services to ensure your bathroom is not only functional
              but also a luxurious and sustainable space. Our innovative
              approach and dedication to quality craftsmanship mean you can
              trust us to deliver exceptional results every time. Contact us
              today to discover how we can help you create the bathroom of your
              dreams with our extensive range of services!
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Services;

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${openGraphImage.title} - Services`,
    description: openGraphImage.description,
  };
}
