import React, { useState, useEffect } from "react";

export default function Frog() {
  const [test, setTest] = useState(false);

  return (
    <div
      className="frog"
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "green"
      }}>

    </div>
  );
}