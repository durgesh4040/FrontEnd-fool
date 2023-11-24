import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS for styling
import "../tailwind.css";
import { useAuth0 } from "@auth0/auth0-react";
function Header({ onSearchChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">BAZAR</Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Product"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="itemNav">
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/categories">Categories</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
          </div>

          <>
            {isAuthenticated ? (
              <>
                <div className="avatar">
                  <img src="../avatar.png" alt={user.name} id="avatar" />
                </div>
                <button onClick={() => logout()}>Log Out</button>
              </>
            ) : (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </>
        </div>
      </nav>
    </header>
  );
}
export default Header;
