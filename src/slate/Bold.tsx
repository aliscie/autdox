const Bold = (props: any) => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
      }}
    >
      {props.children}
    </span>
  );
};
export default Bold;
