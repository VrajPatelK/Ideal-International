import React from "react";

const ListItem = ({ children, heading = "" }) => {
  return (
    <div className="my-5">
      <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
        {heading}
      </h2>
      <ul className="text-gray-500 list-none list-inside dark:text-gray-400 pl-10">
        <li>{children}</li>
      </ul>
    </div>
  );
};

export default ListItem;
