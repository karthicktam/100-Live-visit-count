import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1")
      .then((res) => res.json())
      .then((res) => setCount(res.value));
  }, []);

  return (
    <div>
      <p>This page was viewed</p>
      <h1>{count}</h1>
      <p>times</p>
    </div>
  );
}
