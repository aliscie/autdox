import React from "react";
import Form from "./Form";
import LoginForm from "./LoginForm";
function Header() {
  const element = document.getElementById("root")!;
  return (
    <div>
      <h1>{element.dataset.username}</h1>
      {element.dataset.username !== "AnonymousUser" && Form(element)}
      {element.dataset.username === "AnonymousUser" && LoginForm(element)}
    </div>
  );
}

export default Header;
