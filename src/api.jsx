const API_KEY = '8ef801d052c244e79184b539d188e1b1';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (page = 1) => {
  const response = await fetch(`${BASE_URL}?country=us&page=${page}&pageSize=6&apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const fetchNewsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}?category=${category}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data;
};