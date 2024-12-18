import React from 'react';

const NewsCard = ({ title, description, imageUrl, url }) => {
  return (
<div className="card" style={{width: "18rem", height: "400px"}}>
<img src={imageUrl? imageUrl : 'https://media.istockphoto.com/id/1409309637/vector/breaking-news-label-banner-isolated-vector-design.jpg?s=2048x2048&w=is&k=20&c=rHMT7lr46TFGxQqLQHvSGD6r79AIeTVng-KYA6J1XKM='} className="card-img-top" alt="..." style={{height:"150px"}} />
<div className="card-body">
  <h5 className="card-title">{title}...</h5>
  <p className="card-text">{description}...</p>
  <a href={url} className="btn btn-primary">Read More</a>
</div>
</div>
  );
};

export default NewsCard;