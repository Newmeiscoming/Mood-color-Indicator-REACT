import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [color, setColor] = useState("rgb(238, 241, 0)");
  function handleChange(option) {
    let mood = option.target.value;
    console.log(mood);
    if (mood === "Happy") {
      setColor("rgb(238, 241, 0)");
    } else if (mood === "Sad") {
      setColor("rgb(19, 0, 164)");
    } else if (mood === "Sleepy") {
      setColor("rgb(35,177,0)");
    } else if (mood === "Excited") {
      setColor("rgb(255,0,66)");
    }
  }
  return (
    <div id="main">
      <label htmlFor="">Choose your mood:</label>
      <select id="select" onChange={handleChange}>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id="mood-indicator" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default App;
