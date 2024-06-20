import ContactForm from "@/components/ContactForm/ContactForm";
import Container from "@/layouts/Container";
import Heading4 from "@/layouts/Heading4";
import { openGraphImage } from "../shared-metadata";

const Contact = () => {
  const token = process.env.WHATSAPP_TOKEN;
  const recieverMobileNumber = process.env.WHATSAPP_MOBILE_NUMBER;
  return (
    <Container>
      <div className="grid gap-3">
        <section className="border-blue-500 bg-blue-50 shadow-md rounded-lg lg:grid lg:grid-cols-2 lg:gap-3 pt-12 pb-5 px-5">
          <div className="col-span-1 py-5 hidden lg:block pl-4">
            <div className="text-left font-bold text-5xl w-fit leading-tight">
              Plumbing services we&apos;ve got the fix!
            </div>
            <div className="mt-5 text-justify">
              Whether it&apos;s a leaky faucet, a clogged drain, or a complete
              plumbing overhaul, our team of experienced professionals is here
              to solve all your plumbing problems. With prompt service, quality
              workmanship, and competitive rates, we&apos;re your trusted partner for
              all plumbing repairs, installations, and maintenance.
            </div>
          </div>
          <div className="col-span-1 py-5">
            <ContactForm
              token={token}
              recieverMobileNumber={recieverMobileNumber}
            />
          </div>
        </section>

        <section>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">
              Our Location
            </Heading4>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3678.2204110368966!2d70.82302857530702!3d22.79429537933445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ3JzM5LjUiTiA3MMKwNDknMzIuMiJF!5e0!3m2!1sen!2sin!4v1718787357563!5m2!1sen!2sin"
            className="w-full h-96 border border-gray-100 p-1"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </Container>
  );
};

export default Contact;

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${openGraphImage.title} - Contact Us`,
    description: openGraphImage.description,
  };
}
