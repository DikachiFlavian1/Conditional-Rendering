import React from "react";
import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date().getHours();

console.log(currentTime);

/*function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}
*/
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 12 ? (
        <h1> it's midnight why are you still Working </h1>
      ) : null}
    </div>
  );
}

export default App;
