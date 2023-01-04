import React, { useState } from "react";
import styles from "./singlenews.module.css";
import { useParams } from "react-router-dom";
import { selectNewsById } from "../../redux/newsSlice";
 import { useSelector } from "react-redux";
const SingleNews = () => {
  const [state, setState] = useState({ username: "", email: "", comment: "" });
  const newsId = useParams();
  const data =useSelector(state=>selectNewsById(state,newsId.newsId));
 
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.single_news_container}>
      <h2>{data.title}</h2>
      <div className={styles.author_container}>
        <span>
          By ::
          <a href="">{data.author}</a>
        </span>
        <span></span>
        <span>
          <a href="">{data.comments}</a>
          Comments
        </span>
      </div>
      <div className={styles.image_container}>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.content_container}>
        {data.text.map((item, index) => (
          <div key={`content_${index}`}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
        <div className={styles.tags_category}>
          <div className={styles.tags}>
            <div>Tags : </div>
            <div className={styles.tags_content}>
              {data.tags.map((item, index, array) => {
                let r = index === array.length - 1 ? `${item} ` : `${item}, `;
                return <span>{r}</span>;
              })}
            </div>
          </div>
          <div className={styles.category}>
            <div>Category : </div>
            <span>{data.category}</span>
          </div>
        </div>
      </div>
      <div className={styles.comment_container}>
        <div className={styles.comment_header}>
          <h2>Leave A Comments</h2>
        </div>
        <form
          onSubmit={submitHandler}
          action=""
          className={styles.comment_form}
        >
          <div>
            <input
              value={state.username}
              placeholder={"User name*"}
              className={styles.comment_input}
              type="text"
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, username: e.target.value };
                });
              }}
            />
            <input
              value={state.email}
              placeholder={"Email*"}
              className={styles.comment_input}
              type="email"
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
          </div>
          <textarea
            value={state.comment}
            placeholder={"Your comment*"}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setState((prev) => {
                return { ...prev, comment: e.target.value };
              });
            }}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleNews;
