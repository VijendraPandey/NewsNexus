import React from "react";

const Card3 = ({ info }) => {
  // Destructuring props to extract necessary information
  const { title, description, urlToImage } = info;

  // Handling case where image, title, or description might be missing
  const dummyIMG =
    "https://ichef.bbci.co.uk/news/1024/branded_news/1a2d/live/537ff930-6139-11ee-b101-6f93d6dfbcc2.png";
  const dummyTitle =
    "A Leak of Biometric Police Data Is a Sign of Things to Come";
  const dummyDesc =
    "Thousands of fingerprints and facial images linked to police in India have been exposed online. Researchers say it's a warning of what will happen as the collection of biometric data increases.";

  return (
    <div className="w-[40vw] border-black mt-[2vw]">
      {/* Displaying image, fallback to dummy image if urlToImage is not available */}
      <img src={urlToImage ? urlToImage : dummyIMG} alt="" className="" />

      {/* Displaying title, fallback to dummy title if title is "[Removed]" or not available */}
      <h3 className="text-[1.3vw] pt-[2vw]">
        {title === "[Removed]" || !title ? dummyTitle : title}
      </h3>

      {/* Displaying description, fallback to dummy description if description is "[Removed]" or not available */}
      <p className="pt-[0.4vw]">
        {description === "[Removed]" || !description ? dummyDesc : description}
      </p>

      {/* Additional content discussing the risks of biometric data */}
      <p>
        As biometric data collection becomes more widespread, the risks of
        exposure and misuse are escalating. The recent incident in India, where
        thousands of fingerprints and facial images tied to police activities
        were leaked online, serves as a stark reminder of these dangers. This
        breach underscores the urgent need for robust security measures and
        stringent regulations governing the handling of biometric information.
      </p>
    </div>
  );
};

export default Card3;
