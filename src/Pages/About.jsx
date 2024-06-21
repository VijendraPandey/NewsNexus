import React from "react";
import news from "../assets/news.jpg";

const About = () => {
  return (
    <div className="w-full h-[82vh] gap-5 flex mt-[1vw]">
      {/* Left section */}
      <div className="w-2/3">
        {/* Main heading */}
        <h1 className="text-7xl">About Us</h1>
        
        {/* Introduction */}
        <p className="text-3xl mt-5 italic text-zinc-600">
          "News is the heartbeat of society, pulsing with the rhythm of truth
          and the melody of informed perspectives."
        </p>
        
        {/* Description */}
        <p className="text-lg mt-5 text-zinc-800">
          Welcome to NewsNexus, your trusted source for comprehensive and
          up-to-date news coverage. At NewsNexus, we are dedicated to delivering
          accurate, timely, and unbiased information to our readers. Whether
          you're looking for breaking news, in-depth analysis, or trending
          stories from around the globe, we've got you covered. <br />
          <br /> Our team of experienced journalists and editors is committed to
          journalistic integrity and excellence. We strive to present news in a
          clear, concise manner, ensuring that our readers can stay informed and
          engaged with the world around them.
        </p>
        
        {/* Call to action */}
        <h3 className="mt-10 text-2xl italic">
          Stay connected with NewsNexus – Where News Meets Insight.
        </h3>
      </div>

      {/* Right section with image */}
      <div className="w-1/3">
        <img src={news} alt="News Image" className="w-full h-full object-cover p-5 " />
      </div>
    </div>
  );
};

export default About;
