import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function Header() {
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
    <div className="header">
      <h1 className={change ? "logo smaller hide" : "logo"}>Logo</h1>
      <Navbar />
    </div>
  );
}
