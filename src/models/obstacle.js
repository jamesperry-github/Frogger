import React, { useState, useEffect } from "react";

export default function Obstacle(size) {
  const [test, setTest] = useState(false);

  useEffect (() => {
    move();
  })

  const move = () => {
    setInterval(() => {
      console.log("move");
    }, 3000);
    //let obstacle = document.getElementById('obstacle');

    // use random number for speed?
  }

  const getSize = (size) => {
    switch (size) {
      case 1:
        return "50px";
      case 2:
        return "150px";
      case 3:
        return "250px";
      default:
        return;
    }
  }

  return (
    <div
      id="obstacle"
      className="obstacle"
      style={{
        height: "50px",
        width: getSize(size),
        backgroundColor: "black",
      }}
    ></div>
  );
}

// let ball = document.getElementById("ballID");
  
//       var myVar = setInterval(spostaDiv, 90);
//       var margin = 0;
  
//       let l = window.screen.width;
//       let w = 1300;
  
//       function spostaDiv() {
//         console.log(w);
//         if (margin == w) {
//           margin = 0 + "px";
//         } else {
//           ball.style.marginLeft = margin + "px";
//         }
//         margin += 10;
//       }