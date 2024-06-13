import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src="signature.png" alt="" />
      <div className="right">
        <button>Home</button>
        <button>About </button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Timeline</button>
        <button>Profile</button>
        <button href="/contact">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
