import React from "react";
const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code
        style={{
          color: "tomato",
          background: "gray",
          borderRadius: "5px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
      >
        {props.children}
      </code>
    </pre>
  );
};
export default CodeElement;
