import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styles from "./shop.module.css";
import img1 from "./../../assets/News/12.webp";
import img2 from "./../../assets/News/13.webp";
import img3 from "./../../assets/News/14.webp";
import { AiOutlineStar } from "react-icons/ai";
import { selectAllProducts } from "./../../redux/productsSlice";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import AliceCarousell from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const TabsPanels = () => {
  const [textAreaContent, setTextAreaContent] = useState("");
  const [disabled, setDisabled] = useState(false);
  return (
    <Tabs isFitted variant="unstyled">
      <TabList mb="1em">
        <Tab
          justifyContent={"flex-end"}
          fontWeight={"bold"}
          className={styles.description}
        >
          Description
        </Tab>
        <Tab fontWeight={"bold"}>Additional Information</Tab>
        <Tab justifyContent={"flex-start"} fontWeight={"bold"}>
          Reviw
        </Tab>
      </TabList>
      <TabPanels className={styles.tabs_panels}>
        <TabPanel className={styles.tab_panel_Description}>
          <div className={styles.tab_panel_Description_Header}>
            <div className={styles.tab_panel_left}>
              <img src={img1} alt="img" />
            </div>
            <div className={styles.tab_panel_right}>
              <h3>
                Adjustable Hook & <br /> Loop fastener
              </h3>
              <p>
                Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh.
                Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet
                feugiat, pede. Aenean leo ligula, porttitor eu, consequat vitae,
                eleifend ac, enim. Phasellus dolor.
              </p>
              <Link>Buy now</Link>
            </div>
          </div>
          <img src={img2} alt="img" />
          <div className={styles.tab_panel_Description_Body}>
            <div className={styles.tab_panel_right}>
              <h3>
                Adjustable Hook & <br /> Loop fastener
              </h3>
              <p>
                Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh.
                Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet
                feugiat, pede. Aenean leo ligula, porttitor eu, consequat vitae,
                eleifend ac, enim. Phasellus dolor.
              </p>
              <Link>Buy now</Link>
            </div>
            <div className={styles.tab_panel_left}>
              <img src={img3} alt="img" />
            </div>
          </div>
        </TabPanel>
        <TabPanel className={styles.tab_panel_additional}>
          <p>
            There is a basic, first situation when it’s not a good idea to do
            intensity prescriptions. That’s when the lifter is a newbie. And
            there are two really simple reasons for that. First is, that such
            powerlifters either don’t have 1RMs to base the on or the 1RMs they
            have are not correct. The latter reason occurs due to a mix of
            multiple factors. Such as limited technical ability, limited
            mobility, poor neurological efficiency, and the weak power of will.
            Secondly, new powerlifters usually progress very quickly to the next
            routines of the There are millions of ways on how to compose good
            weightlifting workout programs. Some coaches stay true to few basic
            plans on such training. They simply tweak them to be fit for
            different skills and experience levels. But we are sticking to quite
            a different plan. We put our focus on intensity (actual weights)
            prescriptions for any specific powerlifter. I personally am sure
            there are times when both approaches are applicable, even within the
            same workout session…
          </p>
        </TabPanel>
        <TabPanel className={styles.tab_panel_reviw}>
          <div className={styles.spr_header}>
            <h2>Customer Reviews</h2>
            <div>
              <span>No reviews yet</span>
              <span>
                <button
                  className={styles.button_review}
                  onClick={() => setDisabled(!disabled)}
                >
                  Write a review
                </button>
              </span>
            </div>
          </div>
          <div className={disabled ? styles.spr_body : styles.spr_body_none}>
            <form>
              <h3>Write a review</h3>
              <div className={styles.spr_form_contact}>
                <div className={styles.spr_form_contact_name}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className={styles.spr_form_contact_email}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john.smith@example.com"
                  />
                </div>
              </div>
              <div className={styles.spr_form_review}>
                <div className={styles.spr_from_review_rating}>
                  <label htmlFor="reting">Reting</label>
                  <div>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                </div>
                <div className={styles.spr_from_review_title}>
                  <label htmlFor="title">Rewiew Titile</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Give your review a title"
                  />
                </div>
                <div className={styles.spr_from_review_body}>
                  <label htmlFor="body">
                    Body of Review{" "}
                    <span>({1500 - textAreaContent.length})</span>
                  </label>
                  <textarea
                    name="body"
                    id="body"
                    cols="30"
                    rows="10"
                    placeholder="Write your comments here"
                    value={textAreaContent}
                    onChange={(e) => setTextAreaContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={styles.spr_form_actions}>
                <button>submit review</button>
              </div>
            </form>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const SingleShopPageBottom = () => {
  const allProducts = useSelector(selectAllProducts);
  const renderedProductList = allProducts.map((item) => (
    <ShopItem item={item} />
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1424: { items: 4 },
  };

  return (
    <section className={styles.SingleShopPageBottom}>
      <TabsPanels />
      <AliceCarousell
        className={styles.alice_carousel}
        mouseTracking
        animationDuration={2000}
        infinite={true}
        keyboardNavigation={true}
        items={renderedProductList}
        disableButtonsControls
        responsive={responsive}
      />
    </section>
  );
};

export default SingleShopPageBottom;
