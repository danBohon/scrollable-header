import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Navbar from "./Navbar";

function App() {
  const [change, setChange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const distanceY = window.pageYoffset || document.documentElement.scrollTop,
      shrinkOn = 100;

    if (distanceY > shrinkOn) {
      setChange(true);
    } else setChange(false);
  };
  return (
    <div className="App">
      <Header />
      <Navbar change={change} />
      <Body />
    </div>
  );
}

export default App;
