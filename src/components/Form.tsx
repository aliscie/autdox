import React from "react";

function Form(element: any) {
  return (
    <form className="logout" method="post" action={element.dataset.logouturl}>
      <input hidden name="csrfmiddlewaretoken" value={element.dataset.crf} />
      <button type="submit">logout</button>
    </form>
  );
}

export default Form;
