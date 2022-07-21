import React, { useState, useEffect } from "react";
import Obstacle from "./obstacle";

export default function Setting() {
  const [test, setTest] = useState(false);

  return (
    <div
      className="setting"
    >
      {/* <h5>Frogger</h5> */}
      <div
        className="setting-main-container"
        style={{
          height: "95vh",//"100vh", /* For 100% screen height */
          width: window.width,//"100vw", /* For 100% screen width */
          backgroundColor: "#eee",
        }}
      >
        {Obstacle(1)}
        <br />
        {Obstacle(2)}
        <br />
        {Obstacle(3)}
      </div>
    </div>
  );
}