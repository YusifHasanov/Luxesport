import React from "react";
import AliceCarousell from "react-alice-carousel";
import styles from "./Home.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import news1 from "./../../assets/News/news1.webp";
import news2 from "./../../assets/News/news2.webp";
import news3 from "./../../assets/News/news3.webp";
import news4 from "./../../assets/News/news4.webp";
import news5 from "./../../assets/News/news5.webp";
import news6 from "./../../assets/News/news6.webp";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { routing } from "./../../../globalRouting";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllNews } from "./../../redux/newsSlice";
import {data } from './../../../consts/consts'
const News = () => {
  const navigate = useNavigate();
  // const allNews = useSelector(selectAllNews);
  const allNews = data.news;
  const rendered = allNews.map((item) => {
    return (
      <div className={styles.news_content_blog} key={item.id}>
        <div className={styles.news_pictures}>
          <img
            onClick={() => {
              routing.to(navigate, `news/${item.id}`);
            }}
            src={item.image}
            alt="img"
          />
        </div>
        <div className={styles.new_info_blog}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <button
            onClick={() => {
              routing.to(navigate, `news/${item.id}`);
            }}
          >
            Readmore...
          </button>
        </div>
      </div>
    );
  });
  const renderNextButton = ({ isDisabled }) => {
    return <ImArrowRight className={styles.CursorRight} />;
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <ImArrowLeft className={styles.CursorLeft} />;
  };
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1424: { items: 3 },
  };

  return (
    <section className={styles.News}>
      <div className={styles.NewsHeader}>
        <h3>News</h3>
      </div>
      <div className={styles.NewsBody}>
        <div className={styles.AliceCarousell}>
          <AliceCarousell
            mouseTracking
            responsive={responsive}
            animationDuration={1000}
            animationEasingFunction={"ease-in-out"}
            infinite={true}
            disableDotsControls={true}
            keyboardNavigation={true}
            items={rendered}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
