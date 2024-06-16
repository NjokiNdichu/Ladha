import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="ladha">
        <h1>Ladha</h1>
      </div>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
}

export default Header;
