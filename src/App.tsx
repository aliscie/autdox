import React from "react";
import "./App.css";

function App() {
  const element = document.getElementById("root")!;
  return (
    <div className="App">
      <h1>{element.dataset.username}</h1>
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
