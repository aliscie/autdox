import React from "react";
const DefaultElement = ({ element, attributes, children }: any) => {
  switch (element.type) {
    case "table":
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      );
    case "table-row":
      return <tr {...attributes}>{children}</tr>;
    case "table-cell":
      return <td {...attributes}>{children}</td>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
export default DefaultElement;
