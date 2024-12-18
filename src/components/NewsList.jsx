import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news =[] }) => {
  return (
    <div className="row mx-5 my-1">
      <h2 className="text-center my-3">Top News</h2>
      {news.map((item, index) => (
        <div className="col-md-4 my-2">
          <NewsCard
            key={index}
            title={item.title? item.title.slice(0,40): ''}
            description={item.description? item.description.slice(0,80):''}
            imageUrl={item.urlToImage}
            url={item.url}
          />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
