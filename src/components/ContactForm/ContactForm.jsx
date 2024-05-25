"use client";

import React, { useState } from "react";
import SuccessAlertCard from "../Alerts/SuccessAlertCard";

const ContactForm = () => {
  //
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");

  const [formDisplay, setFormDisplay] = useState(true);

  //
  const changeHandler = (e) => {
    const { value } = e.target;
    if (e.target.name === "floating_first_name") setFname(value);
    if (e.target.name === "floating_last_name") setLname(value);
    if (e.target.name === "floating_email") setEmail(value);
    if (e.target.name === "floating_phone") setMobile(value);
    if (e.target.name === "floating_msg") setMsg(value);
  };

  //
  const sendWhatsappMessage = (textMessage) => {
    // send msg
    const url = `https://wa.me/918732937702?text=${textMessage}`;
    window.open(url, "_blank").focus();
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();

    // send msg
    const textMessage = `*Name :* ${fname} ${lname}%0a*Email :* ${email}%0a*Phone :* ${mobile} %0a*Message :* ${msg} %0a`;
    sendWhatsappMessage(textMessage);

    //
    setFormDisplay(false);
  };
  const handleVisibility = (formVisibility) => setFormDisplay(formVisibility);

  return (
    <>
      {!formDisplay && (
        <SuccessAlertCard onChangeVisibility={handleVisibility}>
          Message sent successfully! we will reply you soon. 👍
        </SuccessAlertCard>
      )}

      {formDisplay && (
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group my-2">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={changeHandler}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group my-2">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={changeHandler}
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group my-2">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={changeHandler}
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group my-2">
            <input
              type="tel"
              pattern="[0-9]{5} [0-9]{5}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={changeHandler}
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (xxxxx xxxxx)
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group my-2">
            <textarea
              name="floating_msg"
              id="floating_msg"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={changeHandler}
              required
            ></textarea>
            <label
              htmlFor="floating_msg"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
