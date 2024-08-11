import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { fetchArticleById, likeArticle } from '../services/apiService';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [likes, setLikes] = useState(article?.likes || 0);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetchArticleById(id); // Fetch articles from your API
        console.log(response.data)
        setArticle(response.data)
        setLikes(response.data.likes);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    loadArticle();
  },[id]);

  const handleLike = async () => {
    try {
      const response = await likeArticle(id); // Fetch articles from your API
      setLikes(likes+1);
    } catch (error) {
      console.error('Error liking the article:', error);
    }
  };

  return (
    <div>
      {article ? (
        <>
        <div className="article-page">
        <div className="article-container">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-likes">
          <button className="like-button" onClick={handleLike}>Like</button>
          <span className="like-count">{likes} Likes</span>
        </div>
        <div className="article-content">{article.content}</div>
      </div>
    </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;
