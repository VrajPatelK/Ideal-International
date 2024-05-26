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
