import React from "react";
import AliceCarousell from "react-alice-carousel";
import styles from "./Home.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import ShopItem from "./../shop/ShopItem";
import { useSelector } from "react-redux";
import { selectAllProducts } from "./../../redux/productsSlice";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1424: { items: 5 },
};

const NewArrivals = () => {
  const allProducts = useSelector(selectAllProducts);

  const renderNextButton = ({ isDisabled }) => {
    return <ImArrowRight className={styles.CursorRight} />
};

const renderPrevButton = ({ isDisabled }) => {
    return <ImArrowLeft className={styles.CursorLeft} />
};
  const rendered = allProducts.map((item) => (
    <ShopItem
      item={item}
    />
  ));

  return (
    <section className={styles.NewArrivals}>
      <div className={styles.NewArriavls_header}>
        <h3>Yeni gələnlər</h3>
      </div>
      <div className={styles.NewArriavls_body}>
        <AliceCarousell
          mouseTracking
          // autoWidth={true}
          // autoPlay={true}
          animationDuration={2000}
          infinite={true}
          disableDotsControls={true}
          keyboardNavigation={true}
          items={rendered}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          responsive={responsive}
        />
      </div>
    </section>
  );
};

export default NewArrivals;
