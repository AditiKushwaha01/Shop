import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation (if using React Router)
import { MdAccountCircle, MdMenu, MdClose, MdConstruction, MdSearch } from "react-icons/md"; // Account and hamburger icons

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this based on login state
  const [dropdownVisible, setDropdownVisible] = useState(false); // For showing account dropdown
  const [isMobile, setIsMobile] = useState(false); // To toggle the mobile menu
  const [isSearchVisible, setIsSearchVisible] = useState(false); // To toggle the search bar visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle the visibility of the search bar
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the state as the user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted for: ", searchQuery);
    setIsSearchVisible(false); // Close the search bar after submission
  };

  return (
    <nav className="bg-[#2C3E50] text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-[#D4AF37] mr-12 flex items-center">
          <MdConstruction className="mr-2" />
          RK Enterprises
        </Link>
        <ul className={`flex space-x-6 ${isMobile ? "flex-col" : "flex-row"}`}>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/kart">Kart</Link></li>
        </ul>
      </div>

      <div className="relative">
        {/* Search Icon */}
        <MdSearch
          className="cursor-pointer text-2xl"
          onClick={toggleSearchBar}
        />

        {/* Search Bar Dropdown */}
        {isSearchVisible && (
          <form onSubmit={handleSearchSubmit} className="absolute top-10 left-0 bg-white text-[#2C3E50] p-2 rounded-md shadow-md">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="px-4 py-2 rounded-md"
            />
            <button type="submit" className="px-4 py-2 ml-2 bg-[#D4AF37] text-white rounded-md">Search</button>
          </form>
        )}
      </div>

      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="relative cursor-pointer" onClick={toggleDropdown}>
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <MdAccountCircle className="text-[#2C3E50]" />
            </div>
            {dropdownVisible && (
              <div className="absolute top-12 right-0 bg-white text-[#2C3E50] border border-gray-300 rounded-md p-4 w-48" style={{ zIndex: 1000 }}>
                <Link to="/account" className="block mb-2">My Account</Link>
                <Link to="/settings" className="block mb-2">Settings</Link>
                <button onClick={() => setIsLoggedIn(false)} className="text-left w-full">Log Out</button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>

      <div className="lg:hidden" onClick={toggleMobileMenu}>
        {isMobile ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
      </div>
    </nav>
  );
};

export default Navbar;
