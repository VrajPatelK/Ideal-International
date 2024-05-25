import React from "react";
import Image from "next/image";

const ServiceCard = (props) => {
  return (
    <div
      className={
        "card-shadow p-6 bg-white justify-self-stretch rounded-lg " +
        props.className
      }
    >
      <div>
        <img
          src={props.imageUrl}
          width={50}
          height={60}
          alt={props.title}
          className="text-white bg-white h-14 w-14 rounded-full p-1"
        />
      </div>

      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
          {props.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-200">
        {props.description}
      </p>
    </div>
  );
};

export default ServiceCard;
