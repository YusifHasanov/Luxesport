import React, { useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import slide1 from "./../../assets/slide_1.webp";
import slide2 from "./../../assets/slide_2.webp";
import slide3 from "./../../assets/slide_3.webp";
import slide4 from "./../../assets/jpg/slide_4.jpg";
import slide5 from "./../../assets/jpg/slide_5.jpg";
import slide6 from "./../../assets/slide_6.webp";
import qiz from './../../assets/png/qiz.png'
const arr = [
  {
    id: 1,
    text: "Güc",
    path: "/",
    img: slide1,
  },
  {
    id: 2,
    text: "Üçün",
    path: "/",
    img: slide2,

  },
  {
    id: 3,
    text: "Çalış",
    path: "/",
    img: slide3,
  },
];

const arr2 = [
  {
    id: 4,
    text: "Qadınlar",
    path: "/",
    img: slide4,
  },
  {
    id: 5,
    text: "Üçün",
    path: "/",
    img: qiz,

  },
  {
    id: 6,
    text: "Gözəllik",
    path: "/",
    img: slide5,
  },
];

const HomeHeader = () => {
  const [ruting, setRuting] = useState(false);

  setTimeout(() => {
    ruting ? setRuting(false) : setRuting(true);
  }, 5000);
  const rendered1 = arr.map((item) => {
    return (
      <div
        className={styles.Pictures_Slide_Item}
        key={item.id}
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <Link path={item.path}>{item.text}</Link>
      </div>
    );
  });

  const rendered2 = arr2.map((item) => {
    return (
      <div
        className={styles.Pictures_Slide_Item}
        key={item.id}
        style={{ background: `url(${item.img})`}}
      >
        <Link path={item.path}>{item.text}</Link>
      </div>
    );
  });
  return (
    <section className={styles.Home_Header_Section}>
      <div className={styles.Pictures_Slide}>
        {ruting ? rendered1 : rendered2}
      </div>
    </section>
  );
};

export default HomeHeader;
