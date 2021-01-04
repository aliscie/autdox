import React from "react";
import lookup from "../api/api";

function Create() {
  const [state, setstate] = React.useState<any>({ title: "", description: "" });
  const callback = (response: any, status: number) => {
    console.log(response, status);
  };
  return (
    <div>
      <input
        onChange={(e) =>
          setstate((pre: any) => {
            return { ...pre, title: e.target.value };
          })
        }
        placeholder="title"
      />
      <input
        onChange={(e) =>
          setstate((pre: any) => {
            return { ...pre, description: e.target.value };
          })
        }
        placeholder="description"
      />
      <input
        onChange={(e) =>
          setstate((pre: any) => {
            return { ...pre, who_can_see: e.target.value };
          })
        }
        placeholder="who_can_see"
      />
      <button
        onClick={() => {
          console.log(state);
          lookup("POST", "api/addbook/", callback, {
            author: 1,
            ...state,
          });
        }}
      >
        create book
      </button>
    </div>
  );
}

export default Create;
