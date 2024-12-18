import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import { fetchNewsByCategory } from '../api';

const NewsPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNewsByCategory(category);
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category]);

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      {loading ? <p>Loading...</p> : <NewsList news={news} />}
    </div>
  );
};

export default NewsPage;
