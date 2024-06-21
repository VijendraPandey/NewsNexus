import React, { useState } from "react";
import ButtonList from "./ButtonList";
import Navbar from "./Navbar";

const ParentButtons = () => {
  // State for active category and active link
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");

  // Function to set active category and reset active link
  const handleSetActiveCategory = (category) => {
    setActiveCategory(category);
    setActiveLink("Home"); // Reset activeLink in Navbar
  };

  // Function to set active link and reset active category
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setActiveCategory(null); // Reset activeCategory in ButtonList
  };

  return (
    <div>
      {/* Navbar component with props */}
      <Navbar
        activeLink={activeLink}
        setActiveLink={handleSetActiveLink}
        setActiveCategory={setActiveCategory}
      />
      {/* ButtonList component with props */}
      <ButtonList
        activeCategory={activeCategory}
        setActiveCategory={handleSetActiveCategory}
        setActiveLink={setActiveLink}
      />
    </div>
  );
};

export default ParentButtons;
