import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from './newsData.json';
import styles from './News.module.css';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = newsData.find(news => news.id.toString() === id) as { id: number; category: string; title: string; excerpt: string; image: string; date: string; url: string; featured: boolean; content: string; };

  if (!newsItem) {
    return <div>新闻未找到</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['news-title']}>{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} className={styles['news-image']} />
      <p className={styles['news-excerpt']}>{newsItem.excerpt}</p>
      <p className={styles['news-date']}>{newsItem.date}</p>
      <p className={styles['news-content']}>{newsItem.content}</p>
      {/* 其他详细信息 */}
    </div>
  );
};

export default NewsDetail; 