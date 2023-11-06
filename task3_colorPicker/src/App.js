import React, { useState } from "react";
import "./index.css";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "teal",
  "brown",
  "gray",
  "violet",
  "black",
  "rgb(147,112,219)",
  "#483D8B",
  "silver",
  "#00FF7F",
  "aqua",
  "bisque",
  "chocolate",
  "gold"
];

function App() {
  const [backgroundColor, setBackgroundColor] = useState("");

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => changeBackgroundColor(color)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default App;