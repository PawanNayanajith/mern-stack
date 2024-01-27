import React from "react";
import Logo from "./Logo";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Logo />
        <NavLinks />
        <NavButton />
      </div>
    </div>
  );
}
