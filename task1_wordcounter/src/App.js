import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const words = text.trim().split(/\s+/);

  return (
    <div className="App">
      <h1>Word Count App</h1>
      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>Word Count: {words.length}</p>
    </div>
  );
}

export default App;
