import React from "react";
import styles from "./Home.module.css";
import { routing } from "../../../globalRouting";
import { useNavigate } from "react-router-dom";
const ShopifySection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.ShopifySection}>
      <div>
        <div className={styles.Shopify_Box}>
          <div className={styles.Shopify_content_banner}>
            <p>Yeni Koleksiya</p>
            <h3>Qadın Geyimləri</h3>
            <button onClick={() => routing.to(navigate, "/shop")}>
              İndi al
            </button>
          </div>
        </div>
        <div className={styles.Shopify_Box}>
          <div className={styles.Shopify_content_banner}>
            <p>Yeni Koleksiya</p>
            <h3>Qadın Geyimləri</h3>
            <button onClick={() => routing.to(navigate, "/shop")}>
              İndi al
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifySection;
