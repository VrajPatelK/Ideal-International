"use client";

import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = (props) => {
  //
  const [isEnter, setIsEnter] = useState(false);

  //
  return (
    <div className={"w-fit py-3 px-5 rounded-xl my-4 " + props.className}>
      <ScrollTrigger
        onEnter={() => setIsEnter(true)}
        onExit={() => setIsEnter(false)}
      >
        {isEnter && (
          <CountUp
            start={props.start}
            end={props.end}
            duration={props.duration}
            className={
              props.cntClass
                ? "font-bold " + props.cntClass
                : "text-4xl font-bold text-blue-600"
            }
            prefix={props.prefix}
          />
        )}
      </ScrollTrigger>
      <div
        className={
          props.txtClass
            ? props.txtClass + " mt-2 font-medium"
            : "text-xl xl:text-2xl mt-2 font-medium"
        }
      >
        {props.text}
      </div>
    </div>
  );
};

export default Counter;
