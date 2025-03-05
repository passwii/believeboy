import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './News.module.css';
import newsData from './newsData.json';
import { Link } from 'react-router-dom';

const categories = ['全部', '公司动态', '行业资讯', '跨境洞察'];

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    document.title = '新闻资讯 - BELIEVE';
  }, []);

  const filteredNews = newsData.filter(
    news => activeCategory === '全部' || news.category === activeCategory
  );

  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = filteredNews.slice(0, visibleCount);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles['hero-section']}>
        <div 
          className={styles['hero-background']}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80")'
          }}
        />
        <div className={styles['hero-overlay']} />
        <div className={styles['hero-content']}>
          <motion.h1 
            className={styles['hero-title']}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            新闻资讯
          </motion.h1>
          <motion.p 
            className={styles['hero-subtitle']}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            了解最新的跨境电商动态与行业趋势
          </motion.p>
        </div>
      </div>

      {/* Categories */}
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <motion.div
            key={category}
            className={`${styles.category} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {category}
          </motion.div>
        ))}
      </div>

      {/* Featured News */}
      <section className={styles['featured-section']}>
        <div className={styles['featured-grid']}>
          {featuredNews.slice(0, 2).map((news, index) => (
            <motion.div
              key={news.id}
              className={`${styles['featured-card']} ${styles['featured-card-small']}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={news.image} alt={news.title} className={styles['featured-image']} />
              <div className={styles['featured-overlay']}>
                <span className={styles['featured-category']}>{news.category}</span>
                <div className={styles['featured-title']}>
                  <h3>{news.title}</h3>
                </div>
                <p className={styles['featured-excerpt']}>{news.excerpt}</p>
                <div className={styles['news-meta']}>
                  <span>{news.date}</span>
                  <Link to={news.url} className={styles['read-more']}>
                    阅读更多 <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {featuredNews.slice(3).map((news, index) => (
            <motion.div
              key={news.id}
              className={styles['featured-card']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
            >
              <img src={news.image} alt={news.title} className={styles['featured-image']} />
              <div className={styles['featured-overlay']}>
                <span className={styles['featured-category']}>{news.category}</span>
                <div className={styles['featured-title']}>
                  <h3>{news.title}</h3>
                </div>
                <p className={styles['featured-excerpt']}>{news.excerpt}</p>
                <div className={styles['news-meta']}>
                  <span>{news.date}</span>
                  <Link to={news.url} className={styles['read-more']}>
                    阅读更多 <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <div className={styles['news-grid']}>
        {regularNews.map((news, index) => (
          <motion.div
            key={news.id}
            className={styles['news-card']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={news.image} alt={news.title} className={styles['news-image']} />
            <div className={styles['news-content']}>
              <span className={styles['news-category']}>{news.category}</span>
              <h3 className={styles['news-title']}>{news.title}</h3>
              <p className={styles['news-excerpt']}>{news.excerpt}</p>
              <div className={styles['news-meta']}>
                <span>{news.date}</span>
                <Link to={news.url} className={styles['read-more']}>
                  阅读更多 <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {filteredNews.length > visibleCount && (
        <motion.button
          className={styles['load-more']}
          onClick={() => setVisibleCount(prev => prev + 3)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          加载更多
        </motion.button>
      )}
    </div>
  );
};

export default News;
