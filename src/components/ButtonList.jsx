import React from "react";
import { Link } from "react-router-dom";

const ButtonList = ({ activeCategory, setActiveCategory, setActiveLink }) => {
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <div className="flex gap-5">
      {/* Map through categories to render buttons */}
      {categories.map((item, index) => {
        return (
          <ul
            key={index}
            className={`px-[1vw] py-[0.5vw] rounded-full border-2 cursor-pointer ${
              activeCategory === item ? "border-[#af695c] text-[#af695c]" : "border-gray-400 text-gray-900"
            }`}
            onClick={() => {
              setActiveCategory(item);
              setActiveLink(null); // Reset activeLink in Navbar
            }}
          >
            {/* Use Link component from react-router-dom for navigation */}
            <Link to={`/${item}`}>
              <li>{item}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default ButtonList;
