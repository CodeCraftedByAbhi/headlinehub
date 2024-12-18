import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import Pagination from '../components/Pagination';
import { fetchNews } from '../api';

const Home = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews(currentPage);
      setNews(data.articles);
      setTotalPages(Math.ceil(data.totalResults / 6)); // Assuming 6 articles per page
    };

    loadNews();
  }, [currentPage]);

  return (
    <div>
      <NewsList news={news} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;