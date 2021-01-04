import React from "react";
import "./App.css";
import Create from "./components/create";
import lookup from "./api/api";
import { brotliCompress } from "zlib";
// auth credineitals not provided
//one posisble solotion it to make ajax inside the localhost:8000
function App() {
  // 🔴I can't set cookies
  // i may need to anable cookies by the browser first.
  // const [cookies, setCookie] = useCookies(["name"]);
  const element = document.getElementById("root")!;
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
      <h1>{element.dataset.username}</h1>
      <Create />
      {element.dataset.username !== "AnonymousUser" && (
        <form
          className="logout"
          method="post"
          action={element.dataset.logouturl}
        >
          <input
            hidden
            name="csrfmiddlewaretoken"
            value={element.dataset.crf}
          />
          <button type="submit">logout</button>
        </form>
      )}

      {element.dataset.username === "AnonymousUser" && (
        <form className="login" method="POST" action={element.dataset.loginurl}>
          <input
            hidden
            name="csrfmiddlewaretoken"
            value={element.dataset.crf}
          />
          <input
            type="text"
            name="login"
            placeholder="Username"
            autoComplete="username"
            maxLength={150}
            required={true}
            id="id_login"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            required={true}
            id="id_password"
          />
          <input type="checkbox" name="remember" id="id_remember" />
          <button className="primaryAction" type="submit">
            Sign In
          </button>
        </form>
      )}
      {element.dataset.username === "AnonymousUser" && (
        <p className="socialaccount_providers">
          login/singup with google
          <a
            title="Google"
            className="socialaccount_provider google"
            href="/accounts/google/login/?process=login"
          >
            Google
          </a>
        </p>
      )}
      <header className="App-header">
        {state.map((item: any) => (
          <div style={{ border: "1px solid black" }}>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
