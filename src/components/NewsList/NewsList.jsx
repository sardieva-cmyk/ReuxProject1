import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../features/content/contentSlice';
import './NewsList.css';

function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.content.news.items);
  const loading = useSelector(state => state.content.news.loading);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="news-container">
        <div className="loading">⏳ Загрузка новостей...</div>
      </div>
    );
  }

  return (
    <div className="news-container">
      <h2>📰 Последние новости</h2>
      <div className="news-list">
        {news.map(item => (
          <div key={item.id} className="news-item">
            <div className="news-header">
              <h3>{item.title}</h3>
              <span className="date">📅 {item.date}</span>
            </div>
            <p className="news-content">{item.content}</p>
            <a href="#" className="read-more">Подробнее →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
