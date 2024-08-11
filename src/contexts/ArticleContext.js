import React, { createContext, useState, useEffect } from 'react';
import { fetchArticles } from '../services/apiService'; // Ensure this path matches your setup

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(); // Fetch articles from your API
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    loadArticles();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
};
