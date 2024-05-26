import React from "react";
import Image from "next/image";

const Card = (props) => {
  const classes = props.className;

  return (
    <div className={classes}>
      <div className="border lg:border-none flex flex-col items-center rounded-lg md:flex-row md:max-w-xl">
        <Image
          width={128}
          height={0}
          className="object-cover lg:border-r-2 lg:w-32 lg:h-auto  md:rounded-none md:rounded-s-lg p-4"
          src={props.imageUrl}
          alt={props.title}
        />
        <div className="flex flex-col justify-between py-2 pl-4 pr-3 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
