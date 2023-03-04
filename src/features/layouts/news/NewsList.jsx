import React, { useEffect } from "react";
import { selectAllNews } from "./../../redux/newsSlice";
import { useSelector } from "react-redux";
import styles from "./singlenews.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
 
const Item = ({ data }) => {
  return (
    <div className={styles.item_box}>
      <div
        className={styles.image_box}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className={styles.item_info_box}>
        <div className={styles.info_header}>
          <div className={styles.date_box}></div>
          <div className={styles.title_box}>
            <p>News</p>
            <div>{data.title}</div>
          </div>
        </div>
        <div className={styles.info_body}>{data.text[0].content}</div>
        <div className={styles.info_footer}>
          <div className={styles.author}>
            <span> BY : 
              <div>{data.author}</div>
            </span>
            <span>{data.comments} COMMENTS</span>
          </div>
          <div className={styles.read_more}></div>
        </div>
      </div>
    </div>
  );
};

const NewsList = () => {
  const allNews = useSelector(selectAllNews);

  const renderedList = allNews.map((data, index) => (
    <Item data={data} key={`item_${data.id}`} />
  ));

  if (allNews) {
    return (
      <div className={styles.news_list_container}>
        <div className={styles.news_list_header}>
          <h2>News</h2>
          <div className={styles.breadcrumbs}>
            <Link className={styles.link_home} to={"/"}>
              <span>HOME</span>
              <IoIosArrowForward className={styles.breadcrumbs_icon} />
            </Link>

            <p>PRODUCTS</p>
          </div>
        </div>
        <div className={styles.news_list_content}>{renderedList}</div>
      </div>
    );
  }
  return <div></div>;
};

export default NewsList;
