import React from "react";
import "./App.css";

function App() {
  const element = document.getElementById("root")!;
  return (
    <div className="App">
      <h1>{element.dataset.username}</h1>
      <header className="App-header">
        <h1>ajax authenticated name should be here.</h1>
      </header>
    </div>
  );
}

export default App;
