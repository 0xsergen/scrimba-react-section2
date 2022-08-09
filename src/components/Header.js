import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <div className="header-banner">
      <img src={logo} className="header--image" width="100" />
      <h1 className="header--name">just travel.</h1>
    </div>
  );
}
