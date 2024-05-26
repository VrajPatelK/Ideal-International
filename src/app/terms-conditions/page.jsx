import CName from "@/components/CName";
import ListItem from "@/components/ListItem/ListItem";
import { termsAndConditions } from "@/data/data";
import Container from "@/layouts/Container";
import Heading4 from "@/layouts/Heading4";
import { Fragment } from "react";
import { openGraphImage } from "../shared-metadata";

const TermsConditions = () => {
  return (
    <div>
      <section className="my-10">
        <Container>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">
              terms & conditions
            </Heading4>
          </div>
        </Container>

        <div className="my-4 py-4">
          <Container>
            <div className="rounded-lg shadow bg-[#F9FAFB] p-10">
              {termsAndConditions.map((tac, index) => {
                return (
                  <Fragment key={index}>
                    <ListItem heading={`${index + 1}. ${tac.title}`}>
                      {tac.description}
                    </ListItem>
                    {index < termsAndConditions.length - 1 && <hr />}
                  </Fragment>
                );
              })}
              <div>
                <h2 className="mt-10 mb-3 text-2xl font-semibold text-blue-600">
                  Conclusion
                </h2>
                <div className="text-gray-800 list-none list-inside">
                  By engaging with <CName />, you acknowledge and agree to these
                  terms and conditions. If you have any questions or concerns,
                  please reach out to us for clarification. We appreciate your
                  trust in us and look forward to creating a luxurious and
                  comfortable bathroom space for you.
                </div>
                <div className="mt-5">
                  <span className="font-semibold">Warmest regards,</span>
                  <br />
                  The <CName /> Team
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${openGraphImage.title} - Terms & Condition`,
    description: openGraphImage.description,
  };
}
