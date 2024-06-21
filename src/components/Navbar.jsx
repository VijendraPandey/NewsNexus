import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ activeLink, setActiveLink, setActiveCategory }) => {
  return (
    <div className="flex items-center justify-between py-[1.5vw]">
      {/* Left section of the navbar */}
      <div className="flex gap-[4vw] items-center">
        <div>
          {/* SVG icon for branding */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 pt-[1.2px]"
          >
            <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
        {/* List of navigation links */}
        <ul className="flex items-center gap-[2vw]">
          <li>
            <Link
              to="/"
              className={`cursor-pointer ${
                activeLink === "Home" ? "text-[#af695c]" : "text-gray-900"
              }`}
              onClick={() => {
                setActiveLink("Home");
                setActiveCategory(null); // Reset activeCategory in ButtonList
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/latest-news"
              className={`cursor-pointer ${
                activeLink === "Latest News"
                  ? "text-[#af695c]"
                  : "text-gray-900"
              }`}
              onClick={() => {
                setActiveLink("Latest News");
                setActiveCategory(null); // Reset activeCategory in ButtonList
              }}
            >
              Latest News
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`cursor-pointer ${
                activeLink === "About Us" ? "text-[#af695c]" : "text-gray-900"
              }`}
              onClick={() => {
                setActiveLink("About Us");
                setActiveCategory(null); // Reset activeCategory in ButtonList
              }}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
      {/* Right section of the navbar */}
      <div>
        <ul className="flex items-center">
          <li>
            {/* Placeholder for Contact Us link */}
            <span className="cursor-pointer">Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
