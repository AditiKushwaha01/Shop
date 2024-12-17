import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation (if using React Router)
import "./Navbar.css"; // For navbar styling
import { MdAccountCircle, MdMenu, MdClose, MdConstruction } from "react-icons/md"; // Account and hamburger icons

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this based on login state
  const [dropdownVisible, setDropdownVisible] = useState(false); // For showing account dropdown
  const [isMobile, setIsMobile] = useState(false); // To toggle the mobile menu
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the state as the user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search query submission
    console.log("Search submitted for: ", searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <MdConstruction />
          RK Enterprises
        </Link>
        <ul className={`navbar-links ${isMobile ? "active" : ""}`}>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/kart">Kart</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-center">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <div className="account-container" onClick={toggleDropdown}>
            <div className="account-circle">
              <MdAccountCircle className="account-icon" />
            </div>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <Link to="/account">My Account</Link>
                <Link to="/settings">Settings</Link>
                <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMobileMenu}>
        {isMobile ? <MdClose className="hamburger-close" /> : <MdMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
