const Heading4 = (props) => {
  const classes = props.className;
  return (
    <div className={classes + " font-bold text-3xl"}>{props.children}</div>
  );
};

export default Heading4;
