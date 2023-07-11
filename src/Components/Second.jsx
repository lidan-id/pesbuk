import { useState } from "react";
import "../About.css";
const Second = () => {
  const [value, setValue] = useState(false);
  const increment = () => {
    setValue((prev) => !prev);
  };
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          //   filter: value ? "blur(10px)" : undefined,
          position: "absolute",
          transition: "2s all",
          left: 0,
          right: value ? 0 : "100%",

          textAlign: "right",
        }}
      >
        value
      </div>
      <h3>
        <div className={`hai ${value ? "hai-active" : ""}`}>hai</div>
      </h3>
      <button onClick={increment}>klik</button>
    </div>
  );
};

export default Second;
