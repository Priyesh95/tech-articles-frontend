import { useContext, useState, useEffect } from 'react';
import { ArticleContext } from '../contexts/ArticleContext';

export const useArticle = () => {
  const { articles } = useContext(ArticleContext);
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (articles.length === 0) {
      setLoading(true);
      setArticleList([]);
      setLoading(false);
    } else {
      setArticleList(articles);
      setLoading(false);
    }
  }, [articles]);

  return { articleList, loading, error };
};
