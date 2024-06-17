import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleRecipesClick = (e) => {
    e.preventDefault();
    navigate("/search");
    window.location.reload(); // Reload the page to reset the view
  };

  return (
    <header className="header">
      <div className="ladha">
        <h1>Ladha Recipes</h1>
      </div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/search" onClick={handleRecipesClick}>
          Recipes
        </Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}

export default Header;

