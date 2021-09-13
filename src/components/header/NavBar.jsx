import React from "react";
import "./myStyle.css";
import { Link } from "react-router-dom";
import Logo from './logo.png'
function NavBar() {
  return (
    <nav className="header">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="header-right">
        {/* <a href="#home">Scan Bar Code</a> */}
      </div>
    </nav>
  );
}

export default NavBar;
