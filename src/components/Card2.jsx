import React from "react";

const Card2 = ({ info }) => {
  // Destructuring props to extract necessary information
  const { title, description } = info;

  // Handling case where title or description might be missing
  const dummyTitle = "'Shambolic' pitch causes havoc as India thrash Ireland";
  const dummyDesc =
    "Watch highlights as India's fearsome pace attack ruthlessly blow away Ireland on a difficult pitch in New York to start their T20 World Cup campaign with an eight-wicket victory.";

  return (
    <div className="w-[23vw] border-black -mt-[13vw]">
      {/* Displaying title, fallback to dummy title if title is "[Removed]" or not available */}
      <h3 className="text-[1.3vw] pb-[2vw]">
        {title === "[Removed]" || !title ? dummyTitle : title.slice(0, 54)}
      </h3>

      {/* Displaying description, fallback to dummy description if description is "[Removed]" or not available */}
      <p className="pb-[1vw]">
        {description === "[Removed]" || !description
          ? dummyDesc
          : description.slice(0, 178)}
      </p>
    </div>
  );
};

export default Card2;
