import React, { useEffect } from "react";
import { selectAllNews } from "./../../redux/newsSlice";
import { useSelector } from "react-redux";
import styles from "./singlenews.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
/*
{    
    "id": "1",
      "title": "Today is the Best Day to Start Training. No excuses.",
      "author": "DUONG NGUYEN",
      "comments": 0,
      "image": "https://cdn.shopify.com/s/files/1/0265/4945/2871/articles/8_1024x1024.jpg?v=1576133604",
      "text": [
        {
          "title": "IS PRESCRIPTION WORKING?",
          "content": "There is a basic, first situation when it’s not a good idea to do intensity prescriptions. That’s when the lifter is a newbie. And there are two really simple reasons for that. First is, that such powerlifters either don’t have 1RMs to base the  on or the 1RMs they have are not correct. The latter reason occurs due to a mix of multiple factors.  Such as limited technical ability, limited mobility, poor neurological efficiency, and the weak power of will. Secondly, new powerlifters usually progress very quickly to the next routines of the There are millions of ways on how to compose good weightlifting workout programs. Some coaches stay true to few basic plans on such training. They simply tweak them to be fit for different skills and experience levels. But we are sticking to quite a different plan. We put our focus on intensity (actual weights) prescriptions for any specific powerlifter.  I personally am sure there are times when both approaches are applicable, even within the same workout session…"
        },
        {
          "title": "USEFUL ADVICE",
          "content": "The next situation is in a program in which the trainer wants the powerlifter to workout as intense as possible on any given session. This may mean aspiring to a single maximal or near-maximal set (perhaps with subsequent back-off sets). Then lifter’s hitting a prescribed number of sets of the maximal number of weights per set. In such a situation it’s always better to listen to the coach’s personal guidance. No one except your trainer will be able to intuitively figure out what’s best for your workout routine right now."
        }
      ],
      "tags": [
        "BLOG",
        "EQUIPMENT",
        "FITNESS",
        "GYM",
        "HEALTHY",
        "MEN",
        "POWERFUL",
        "STRONG"
      ],
      "category": "NEWS"
    },
*/

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
