import React from "react";

function Paper(item: { title: string; description: string }) {
  return (
    <div style={{ border: "1px solid black", margin: "5px" }}>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default Paper;
