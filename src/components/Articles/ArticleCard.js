import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleCard.css';

const ArticleCard = ({ article }) => {
  console.log(article)
  return (
    <div className={'article-card'}>
      <h3 className={'article-title-card'}>{article.title}</h3>
      <p className={'article-description'}>{article.description}</p>
      <div className={'article-actions'}>
        <Link to={`/article/${article._id}`} className={'article-button'}>
          Read More
        </Link>
        <div className={'article-likes'}>
          <span className={'likes-icon'}>&#128077;</span>
          {article.likes} Likes
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
