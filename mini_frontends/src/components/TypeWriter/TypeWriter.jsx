import React, { useState } from "react";

let dummyText = "Yes we did congrats";
let timer;
const TypeWriter = () => {
  const [text, setText] = useState("");

  function startGenerating() {
    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === dummyText.length - 1) clearInterval(timer);
      setText((prev) => prev + dummyText[i]);
    }, 50);
  }

  function reset() {
    setText("");
  }

  return (
    <div>
      <button onClick={() => startGenerating()}>Start</button>
      <button onClick={() => reset()}>Reset</button>
      <h2>{text ? text : "Click to start generating!"}</h2>
    </div>
  );
};

export default TypeWriter;
