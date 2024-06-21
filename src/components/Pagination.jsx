import React from "react";

const Pagination = ({ totalCards, cardPerPage, setCurrentPage }) => {
  // Calculate total number of pages based on totalCards and cardPerPage
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pt-10 pb-10 flex justify-center gap-3">
      {/* Map through pages array to render pagination buttons */}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)} // Set current page when button is clicked
          className="flex justify-center items-center w-12 h-12 rounded-full border border-gray-300 text-gray-700 hover:bg-[#eea69a] hover:text-white focus:outline-none focus:bg-[#af695c] focus:text-white transition-colors"
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
