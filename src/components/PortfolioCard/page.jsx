import React from "react";
import plumberProfile from "../../../public/plumber-profile.jpg";
import Image from "next/image";

// import about1 from "../../../public/about-1.jpg";

const PortfolioCard = (props) => {
  const classes = props.className;
  return (
    <div
      className={
        classes +
        " w-full max-w-sm rounded-lg py-5 bg-[#F9FAFB] shadow-sm"
      }
    >
      <div className="flex flex-col items-center">
        {props.imageUrl ? (
          <img
            className="w-40 h-40 mb-3 rounded-full shadow-lg"
            src={props.imageUrl}
            alt={props.name}
          />
        ) : (
          <Image
            className="w-40 h-40 mb-3 rounded-full shadow-lg"
            src={plumberProfile}
            alt={props.name}
          />
        )}
        <h5 className="mb-1 text-xl font-semibold text-blue-900">
          {props.name}
        </h5>
        <span className="text-sm font-medium text-gray-500">
          {props.role}
        </span>
      </div>
    </div>
  );
};

export default PortfolioCard;
