import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectProductById } from "./../../redux/productsSlice";
import styles from "./shop.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousell from "react-alice-carousel";
import { AiOutlineStar } from "react-icons/ai";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import SingleShopPageBottom from "./SingleShopPageBottom";
import Button from "../../../companent/button/Button";
import Input from "../../../companent/input/Input";


const SingleShopPage = () => {
  
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState(1);
  const productId = useParams();
  const singleProduct = useSelector((state) =>
    selectProductById(state, productId.productId)
  );



  const sizeChanger = (paramsValue) => setSelectedSize(paramsValue);
  const styleChanger = (paramsValue) => setSelectedStyle(paramsValue);

  const renderNextButton = ({ isDisabled }) => {
    return <BsArrowRight className={styles.CursorRight} />;
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <BsArrowLeft className={styles.CursorLeft} />;
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1424: { items: 1 },
  };

  const aliceItems = singleProduct
    ? [
      <div>
        <img src={singleProduct.image} alt="" />
      </div>,
    ]
    : [];
  if (singleProduct) {
    return (
      <div className={styles.singe_product_container}>
        <div>
          <div className={styles.single_header}>
            <Link className={styles.home_link} to={"/"}>
              Home
            </Link>
            <IoIosArrowForward />
            <p>{singleProduct.title}</p>
          </div>
          <div className={styles.product_detail}>
            <div className={styles.alice_box}>
              <AliceCarousell
                className={styles.alice_carousel}
                mouseTracking
                animationDuration={1000}
                infinite={true}
                disableDotsControls={true}
                keyboardNavigation={true}
                items={aliceItems}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                responsive={responsive}
              />
            </div>
            <div className={styles.SingleShopPage_content_right}>
              <div className={styles.detail_info}>
                <div className={styles.wrap_rating}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <span>Rəy yoxdur</span>
                </div>
                <h2>{singleProduct.title}</h2>
                <div className={styles.price_box}>
                  {singleProduct.price} AZN
                </div>
                <p className={styles.product_about}>{singleProduct.detail}</p>
                <div className={styles.maxus_productdetail_options}>
                  <p className={styles.title_variant}>Style</p>
                  <div className={styles.style_box}>
                    <button
                      onClick={() => styleChanger(1)}
                      className={
                        selectedStyle === 1
                          ? styles.value_box_active
                          : styles.value_box
                      }
                    >
                      simple
                    </button>
                    <button
                      onClick={() => styleChanger(2)}
                      className={
                        selectedStyle === 2
                          ? styles.value_box_active
                          : styles.value_box
                      }
                    >
                      hard
                    </button>
                  </div>
                </div>
                <div className={styles.maxus_productdetail_options}>
                  <p className={styles.title_variant}>size</p>
                  <div className={styles.style_box}>
                    <button
                      onClick={() => sizeChanger(1)}
                      className={
                        selectedSize === 1
                          ? styles.value_box_active
                          : styles.value_box
                      }
                    >
                      big
                    </button>
                    <button
                      onClick={() => sizeChanger(2)}
                      className={
                        selectedSize === 2
                          ? styles.value_box_active
                          : styles.value_box
                      }
                    >
                      small
                    </button>
                    <button
                      onClick={() => sizeChanger(3)}
                      className={
                        selectedSize === 3
                          ? styles.value_box_active
                          : styles.value_box
                      }
                    >
                      normal
                    </button>
                  </div>
                </div>
                <div className={styles.add_to_card}>
                  <Button/>
                  <Input/>
                </div>
                <ul className={styles.product_meta_info}>
                  <li>
                    <label>categories :</label>
                    <Link to="/shop">Equiment</Link>
                  </li>
                  <li>
                    <label>Share :</label>
                    <div className={styles.icons_box}>
                      <Link>
                        <FaFacebookF />
                      </Link>
                      <Link>
                        <FaInstagram />
                      </Link>
                      <Link>
                        <FaTwitter />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <SingleShopPageBottom />
      </div>
    );
  }
  return (
    <>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
      <SingleShopPageBottom />
    </>
  );
};

export default SingleShopPage;
