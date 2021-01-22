import React from "react";
import "./App.css";
import Create from "./components/create";
import lookup from "./api/api";
import Header from "./components/Header";
import Paper from "./components/Paper";
// auth credineitals not provided
//one posisble solotion it to make ajax inside the localhost:8000
function App() {
  // 🔴I can't set cookies
  // i may need to anable cookies by the browser first.
  // const [cookies, setCookie] = useCookies(["name"]);

  // React.useEffect(() => {
  //   setCookie("name", JSON.stringify({ name: "other name" }), { path: "/" });
  // }, []);
  // const val = JSON.stringify(cookies.name);
  // console.log(JSON.parse(val));

  // var getCookies = function () {
  //   var pairs = document.cookie.split(";");
  //   var cookies: any = {};
  //   for (var i = 0; i < pairs.length; i++) {
  //     var pair = pairs[i].split("=");
  //     cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
  //   }
  //   console.log(cookies);
  //   return cookies;
  // };

  // var myCookies = getCookies();
  const [state, setstate] = React.useState([]);
  const callback = (response: any, status: number) => {
    setstate(
      response !== null && response.books !== null ? response.books : []
    );
    console.log(response, status);
  };
  React.useEffect(() => {
    lookup("GET", "api/", callback);
  }, []);
  return (
    <div className="App">
      <Header />
      <Create />
      {state.map((item: any) => Paper(item, setstate))}
    </div>
  );
}

export default App;
