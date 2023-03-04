import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  Collapse,
  Box,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./shop.module.css";
import { BiFilterAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllProducts } from "./../../redux/productsSlice";
import ShopItem from "./ShopItem";
import { selectAllCategories } from "./../../redux/categorySlice";
import { data } from "../../../consts/consts";
const priceArray = [
  {
    min: 100,
    max: 200,
  },
  {
    min: 400,
    max: 500,
  },
  {
    min: 1000,
    max: 1500,
  },
];

const Shop = () => {
  // const allProducts = useSelector(selectAllProducts);
  // const allCategories = useSelector(selectAllCategories);
  const allProducts = data.products;
  const allCategories = data.categories;
  const [scrollData, setScrollData] = useState(8);
  const [select, setSelect] = useState("manual");
  const { isOpen: isFilterOpen, onToggle: onFilterToggle } = useDisclosure();

  const renderedProductList = allProducts
    .slice(0, scrollData > allProducts.length ? allProducts.length : scrollData)
    .map((item) => <ShopItem item={item} />);

  const renderedCategories = allCategories.map((item, id) => (
    <li className={styles.category_list_item} key={`category_${id}`}>
      <div className={styles.dot}></div>
      {item.name}
    </li>
  ));

  const renderedPrice = priceArray.map((item, id) => (
    <li className={styles.price_list_item}>
      <div className={styles.dot}></div>${item.min}-${item.max}
    </li>
  ));

  return (
    <div className={styles.shop_containerr}>
      <div className={styles.shop_header}>
        <h2>Products</h2>
        <div className={styles.breadcrumbs}>
          <Link className={styles.link_home} to={"/"}>
            <span>HOME</span>
            <IoIosArrowForward className={styles.breadcrumbs_icon} />
          </Link>

          <p>PRODUCTS</p>
        </div>
      </div>
      <div className={styles.content_container}>
        <div className={styles.content_header}>
          <h2>Products</h2>
        </div>
        <div className={styles.shop_control}>
          <div onClick={onFilterToggle} className={styles.filter_control}>
            <BiFilterAlt />
            Filter
          </div>
          <div className={styles.category_control}>All Categories</div>
          <div className={styles.sort_control}>
            <select
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
              name="SortBy"
              id="SortBy"
              class="orderby"
            >
              <option value="manual">Featured</option>
              <option value="best-selling">Best Selling</option>
              <option value="title-ascending">Alphabetically, A-Z</option>
              <option value="title-descending">Alphabetically, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
              <option value="created-descending">Date, new to old</option>
              <option value="created-ascending">Date, old to new</option>
            </select>
          </div>
        </div>
        <Collapse in={isFilterOpen}>
          <div className={styles.filter_container}>
          <div className={styles.filter_component}>
            <div className={styles.category}>
              <h2>Categories</h2>
              <ul className={styles.category_list}>{renderedCategories}</ul>
            </div>
            <div>
              <h2>Size</h2>
              <ul className={styles.size_list}>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>
            <div className={styles.price_filter}>
              <h2>PRICE FILTER</h2>
              <ul className={styles.price_list}>{renderedPrice}</ul>
            </div>
          </div>
          </div>
        </Collapse>
        <div className={styles.productList}>
          {allProducts.length > 0 ? (
            renderedProductList
          ) : (
            <>
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
              <Box padding="6" boxShadow="lg" bg="white">
                <SkeletonCircle size="10" />
                <SkeletonText
                  mt="4"
                  noOfLines={4}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
            </>
          )}
        </div>
        {scrollData < allProducts.length ? (
          <div
            className={styles.load_more}
            onClick={() => {
              setScrollData((prev) => prev + 8);
            }}
          >
            <button>Load more</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Shop;
