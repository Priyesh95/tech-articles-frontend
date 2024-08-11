import React from 'react';
import { useArticle } from '../../hooks/useArticles';
import ArticleCard from './ArticleCard';
import './ArticleList.css'

const ArticleList = () => {
  const { articleList, loading, error } = useArticle();

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div>Error loading articles: {error.message}</div>;

  return (
    <div className="homepage-container">
      <h1 className="article-list-heading">Latest Technology Articles</h1>
      <div className="article-list">
        {articleList.length ? (
          articleList.map((article) => <ArticleCard key={article._id} article={article} />)
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
