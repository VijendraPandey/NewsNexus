import React from "react";

const Card1 = ({ info }) => {
  // Destructuring props to extract necessary information
  const { title, description, image_url, source = {} } = info;
  const { name } = source;

  // Handling case where image, title, description, or source name might be missing
  const dummyIMG =
    "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png";
  const dummyTitle = "India games arcade fire kills 20";
  const dummyDesc =
    "The fire broke out in a gaming zone in the western state of Gujarat";
  const dummyName = "BBC News";

  return (
    <div className="w-[23vw] mt-[2vw]">
      {/* Displaying image, fallback to dummy image if urlToImage is not available */}
      <img src={image_url ? image_url : dummyIMG} alt="" />

      {/* Displaying title, fallback to dummy title if title is "[Removed]" or not available */}
      <h3 className="text-[1.3vw] pb-[2vw] pt-[2vw]">
        {title === "[Removed]" || !title ? dummyTitle : title.slice(0, 32)}
      </h3>

      {/* Displaying description, fallback to dummy description if description is "[Removed]" or not available */}
      <p className="pb-[1vw]">
        {description === "[Removed]" || !description
          ? dummyDesc
          : description.slice(0, 67)}
      </p>

      {/* Displaying source name, fallback to dummy name if name is "[Removed]" or not available */}
      <h4 className="text-[1.5vw] pb-[1vw]">
        {name === "[Removed]" || !name ? dummyName : name}
      </h4>

      {/* Horizontal line separator */}
      <hr className="border-gray-400" />
    </div>
  );
};

export default Card1;
