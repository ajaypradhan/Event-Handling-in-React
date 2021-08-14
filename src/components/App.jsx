import React, { useState } from "react";

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  function mouseOver() {
    setIsMouseOver(true);
  }
  function mouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ background: isMouseOver ? "black" : "white" }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
