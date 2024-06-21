import React from "react";

const Card5 = ({ info }) => {
  // Destructuring props to extract necessary information
  const { title, description, urlToImage } = info;

  // Handling case where image, title, or description might be missing
  const dummyIMG =
    "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png";
  const dummyTitle = "Why an exam has sparked national outrage in India";
  const dummyDesc =
    "The key examination for medical colleges in India has been mired in allegations of paper";

  return (
    <div className="w-[23vw] -mt-[22.8vw]">
      {/* Displaying image, fallback to dummy image if urlToImage is not available */}
      <img src={urlToImage ? urlToImage : dummyIMG} alt="" />

      {/* Displaying title, fallback to dummy title if title is "[Removed]" or not available */}
      <h3 className="text-[1.3vw] pb-[1vw] pt-[2vw]">
        {title === "[Removed]" || !title ? dummyTitle : title.slice(0, 78)}
      </h3>

      {/* Displaying description, fallback to dummy description if description is "[Removed]" or not available */}
      <p className="pb-[1vw]">
        {description === "[Removed]" || !description
          ? dummyDesc
          : description.slice(0, 88)}
      </p>
    </div>
  );
};

export default Card5;
