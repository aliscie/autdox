import React from "react";
import lookup from "../api/api";

function Paper(
  item: { id: number; title: string; description: string },
  setstate: any
) {
  const callback = (response: any, status: number) => {
    setstate(
      response !== null && response.books !== null ? response.books : []
    );
    console.log({ response: response, status: status });
  };
  return (
    <div style={{ border: "1px solid black", margin: "5px" }}>
      <h1 contentEditable>{item.title}</h1>
      <p contentEditable>{item.description}</p>
      <button
        onClick={() => {
          lookup("DELETE", `api/deletebook/${item.id}/`, callback);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Paper;
