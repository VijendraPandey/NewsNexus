import React, { useEffect, useState } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Pagination from "./Pagination";
import ErrorComponent from "./ErrorComponent";

const Body = ({ cat }) => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(5);
  const [error, setError] = useState(null);

  // Calculate indices for pagination
  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentContent = content.slice(firstCardIndex, lastCardIndex);

  // Fetch news data based on category
  useEffect(() => {
    getNews();
  }, [cat]);

  async function getNews() {
    try {
      const data = await fetch(
        cat
          ? `https://newsapi.org/v2/everything?q=${cat}&apiKey=${
              import.meta.env.VITE_API_KEY
            }`
          : `https://newsapi.org/v2/everything?q=india&apiKey=${
              import.meta.env.VITE_API_KEY
            }`
      );
      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      console.log(json.articles);
      setContent(json.articles);
      setError(null); // Reset error state if request is successful
    } catch (err) {
      setError(err.message);
    }
  }

  // Render error component if there's an error
  if (error) {
    return <ErrorComponent message={error} />;
  }

  return (
    <div className="">
      <h1 className="text-[3vw]">{cat ? cat : ""}</h1>
      <div className="parent flex relative flex-wrap justify-between">
        {currentContent.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
              <div className="">
                {index % 5 === 0 || index % 5 === 3 ? (
                  <div className="">
                    {index % 5 === 0 ? (
                      <Card1 info={item} />
                    ) : (
                      <Card2 info={item} />
                    )}
                  </div>
                ) : index % 5 === 1 ? (
                  <Card3 info={item} />
                ) : index % 5 === 2 || index % 5 === 4 ? (
                  <div className="">
                    {index % 5 === 2 ? (
                      <Card4 info={item} />
                    ) : (
                      <Card5 info={item} />
                    )}
                  </div>
                ) : null}
              </div>
            </a>
          );
        })}
      </div>
      <Pagination
        totalCards={content.length}
        cardPerPage={cardPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Body;
