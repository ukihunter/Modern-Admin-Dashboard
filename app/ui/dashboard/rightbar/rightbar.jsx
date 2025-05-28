"use client";
import React, { useEffect, useState } from "react";
import styles from "./rightbar.module.css";

const Rightbar = () => {
  const [lkrRate, setLkrRate] = useState(null);
  const [techNews, setTechNews] = useState([]);
  const [worldTechNews, setWorldTechNews] = useState([]);

  useEffect(() => {
    const fetchLkrRate = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        setLkrRate(data.rates.LKR);
      } catch (error) {
        console.error("Error fetching the LKR rate:", error);
      }
    };

    const fetchTechNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?category=technology&apiKey=YOUR_API_KEY"
        );
        const data = await response.json();
        setTechNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching tech news:", error);
      }
    };

    const fetchWorldTechNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=technology&apiKey=9d72a6cdbdf243bf904090d76ec5f3f2"
        );
        const data = await response.json();
        setWorldTechNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching world tech news:", error);
      }
    };

    fetchLkrRate();
    fetchTechNews();
    fetchWorldTechNews();
    const interval = setInterval(fetchLkrRate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgConteainer}>
          <img src="./noti.png" alt="" className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>New Update</span>
          <h3>Current Rate</h3>
          {lkrRate && (
            <div className={styles.dollarRate}>
              <span>
                Current Dollar Rate:{" "}
                <span className={styles.lkr}>{lkrRate} LKR</span>
              </span>
            </div>
          )}
          <button className={styles.button}>see more</button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgConteainer}>
          <img src="./news.png" alt="" className={styles.bgnews} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>World Tech News</span>
          <h3>Latest in World Tech</h3>
          {worldTechNews.length > 0 ? (
            <ul className={styles.newsList}>
              {worldTechNews.slice(0, 5).map((news, index) => (
                <li key={index} className={styles.newsItem}>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
          <button className={styles.button}>see more</button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
