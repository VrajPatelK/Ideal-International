const ListItem = ({ children, heading = "" }) => {
  return (
    <div className="my-5">
      <h2 className="mb-2 text-lg font-semibold text-gray-800">{heading}</h2>
      <ul className="text-gray-500 list-none list-inside sm:pl-10 pl-6">
        <li>{children}</li>
      </ul>
    </div>
  );
};

export default ListItem;
