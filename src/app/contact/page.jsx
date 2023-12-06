import React from "react";
import Heading4 from "@/layouts/Heading4";
import Card from "@/components/Card/page";
import Container from "@/layouts/Container";
import ContactForm from "@/components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <Container>
      <div className="grid gap-3">
        <section className="border-blue-500 bg-blue-50 shadow-md rounded-lg lg:grid lg:grid-cols-2 lg:gap-3 pt-12 pb-5 px-5">
          <div className="col-span-1 py-5 hidden lg:block">
            <div className="text-left font-bold xl:text-6xl text-5xl w-fit leading-tight">
              Plumbing services we've got the fix!
            </div>
            <div className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              saepe dolorum, similique, dolorem culpa porro commodi adipisci
              error consequatur pariatur hic sequi aut?
            </div>
          </div>
          <div className="col-span-1 py-5">
            <ContactForm />
          </div>
        </section>

        <section>
          <div className="my-2">
            <Heading4 className="text-blue-600 capitalize">
              Our Location
            </Heading4>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14725.160901005636!2d72.871443926606!3d22.6802374620381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5adf2c171355%3A0xe1e974ce083657fb!2sDHARMSINH%20DESAI%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1674827651385!5m2!1sen!2sin"
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
