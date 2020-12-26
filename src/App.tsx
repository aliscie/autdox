import React from "react";
import "./App.css";
import { useCookies } from "react-cookie";

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
  return (
    <div className="App">
      <h1>{element.dataset.username}</h1>
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
          <button type="submit">from react logout</button>
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
        <h1>ajax authenticated name should be here.</h1>
      </header>
    </div>
  );
}

export default App;
