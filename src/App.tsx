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
            type="hidden"
            name="csrfmiddlewaretoken"
            value={element.dataset.crf}
          />
          <button type="submit">from react logout</button>
        </form>
      )}

      {element.dataset.username === "AnonymousUser" && (
        // 🔴 how to login/singup without leaving the page.
        <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=13721924041-tnmmge21adu3mg7k7agvcgiqs7f2trnt.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Faccounts%2Fgoogle%2Flogin%2Fcallback%2F&scope=profile&response_type=code&state=TOH6guRryjRf&flowName=GeneralOAuthFlow">
          login
        </a>
      )}
      <header className="App-header">
        <h1>ajax authenticated name should be here.</h1>
      </header>
    </div>
  );
}

export default App;
