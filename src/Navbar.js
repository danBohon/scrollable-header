import React from "react";

export default function Navbar(props) {
  return (
    <div
      className={props.change ? "navbar navbar-after" : "navbar navbar-before"}
    >
      <span>Home | </span>
      <span>About | </span>
      <span>Music | </span>
      <span>Pictures | </span>
      <span>Shows</span>
    </div>
  );
}
