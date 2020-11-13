import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="navBar">
        <h1 className="header">MY BOOKCASE</h1>
        <Link to="/" className="header-button">
          Home
        </Link>
        <Link to="/bookcase" className="header-button">
          Bookcase
        </Link>
        <Link to="/about" className="header-button">
          About
        </Link>
      </header>
    </div>
  );
};

export default Header;
