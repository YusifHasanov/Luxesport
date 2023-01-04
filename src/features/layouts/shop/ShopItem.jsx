import React from "react";
// import styles from "./../startup/Home.module.css";
import styles from "./shop.module.css";

import { SlOptions } from "react-icons/sl";
import { ImStarFull, ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { routing } from "./../../../globalRouting";
const ShopItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        routing.to(navigate, `/shop/${item.id}`);
      }}
      className={styles.Arrivals_product}
      key={item.id}
    >
      <div className={styles.img_products}>
        <img src={item.image} alt="img" />
      </div>
      <div className={styles.Arrivals_info_product}>
        <h4>{item.title}</h4>
        <span>$ {item.price}</span>
        <div className={styles.iconContent}>
          <div className={styles.iconBox}>
            <SlOptions />
          </div>
          <div className={styles.iconBox}>
            <ImStarFull />
          </div>
          <div className={styles.iconBox}>
            <ImSearch />
          </div>
        </div>
      </div>
      <div className={styles.Arrivals_detals_info}>
        <h4>{item.title}</h4>
        <p className={styles.price_product}>$ {item.price}</p>
      </div>
    </div>
  );
};

export default ShopItem;
