import React from "react";
import styles from "./Home.module.css";
import ShopCatagoryBig1 from "./../../assets/ShopCatagory1.webp";
import ShopCatagoryBig2 from "./../../assets/ShopCatagory2.webp";
import ShopCatagoryBig3 from "./../../assets/ShopCatagory3.webp";
import ShopCatagorySmall1 from "./../../assets/ShopCatagory1.1.avif";
import ShopCatagorySmall2 from "./../../assets/ShopCatagory2.1.avif";
import ShopCatagorySmall3 from "./../../assets/ShopCatagory3.1.avif";
import { useNavigate } from "react-router-dom";
import { routing } from "./../../../globalRouting";

const ShopCatagory = () => {
  const navigate = useNavigate();
  const rendered = arr.map((item) => {
    return (
      <div key={item.id}>
        <div className={styles.ShopCard_body_left}>
          <img src={item.bigImg} />
        </div>
        <div className={styles.ShopCard_body_right}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <img src={item.smallImg} />
          <button onClick={() => routing.to(navigate, "/shop")}>
            {item.button}
          </button>
        </div>
      </div>
    );
  });
  return (
    <section className={styles.ShopCatagory}>
      <div className={styles.ShopCatagory_title}>
        <h3>MAĞAZA KATEQORİYALARI</h3>
        <p>Sizin üçün ən yaxşı kateqoriyalı mağaza</p>
      </div>
      <div className={styles.ShopCatagory_body}>{rendered}</div>
    </section>
  );
};
const arr = [
  {
    id: 1,
    title: "Geyim",
    content:
      "Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing",
    bigImg: ShopCatagoryBig1,
    smallImg: ShopCatagorySmall1,
    button: "Bütün geyimləri gör",
  },
  {
    id: 2,
    title: "Geyim",
    content:
      "Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing",
    bigImg: ShopCatagoryBig2,
    smallImg: ShopCatagorySmall2,
    button: "Bütün geyimləri gör",
  },
  {
    id: 3,
    title: "Geyim",
    content:
      "Lorem Ipsum is simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing simply dummy text of the printing",
    bigImg: ShopCatagoryBig3,
    smallImg: ShopCatagorySmall3,
    button: "Bütün geyimləri gör",
  },
];
export default ShopCatagory;
