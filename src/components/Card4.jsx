import React from "react";

const Card4 = ({ info }) => {
  // Destructuring props to extract necessary information
  const { title, description, source = {} } = info;
  const { name } = source;

  // Handling case where title, description, or source name might be missing
  const dummyTitle = "Find the latest India election results here";
  const dummyName = "BBC News";
  const dummyDesc =
    "Follow the results live as votes are counted in India, the world's biggest democracy.";

  return (
    <div>
      <div className="w-[23vw] p-[1vw] mt-[2vw] bg-[#af695c] text-white">
        {/* Displaying title, fallback to dummy title if title is "[Removed]" or not available */}
        <h3 className="text-[1.3vw] pb-[1vw]">
          {title === "[Removed]" || !title ? dummyTitle : title.slice(0, 43)}
        </h3>

        {/* Displaying source name, fallback to dummy name if name is "[Removed]" or not available */}
        <h4 className="text-[1.5vw] pb-[1vw]">
          {name === "[Removed]" || !name ? dummyName : name}
        </h4>

        {/* Displaying description, fallback to dummy description if description is "[Removed]" or not available */}
        <p>
          {description === "[Removed]" || !description
            ? dummyDesc
            : description.slice(0, 85)}
        </p>
      </div>
      <hr className="border-gray-400 mt-[0.8vw]" />
    </div>
  );
};

export default Card4;
