const getCookie = (name: string) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};
export default function lookup(
  method: string,
  endpoint: string,
  callback: Function,
  data?: any
) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open(method, `${window.location.origin}/${endpoint}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader(
    "Authorization",
    "Basic " + btoa("Ali" + ":" + "AAssppmm11")
  );
  const coockie = getCookie("csrftoken");
  if (coockie) {
    xhr.setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest");
    xhr.setRequestHeader("X-Requested-with", "XMLHttpRequest");
    xhr.setRequestHeader("X-CSRFToken", coockie);
  }
  xhr.onload = function () {
    callback(xhr.response, xhr.status);
  };
  xhr.onerror = function (e) {
    console.log(e);
    callback({ message: "The request was an error" }, 400);
  };
  xhr.send(JSON.stringify(data));
}
