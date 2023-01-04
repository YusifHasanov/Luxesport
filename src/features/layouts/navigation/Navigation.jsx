import React, { useRef } from "react";
import styles from "./navigation.module.css";
import naviLogo from "./../../assets/png/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import LoginRegister from "../LoginRegister/LoginRegister";
import SideBar from "./SideBar";
import { Link, useNavigate } from "react-router-dom";
import { routing } from "../../../globalRouting";
import CartSidebar from "../cart/CartSidebar";
import { useDisclosure } from "@chakra-ui/react";

const SearchNav = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{ transform: `translateY(${props.translateY}%` }}
      className={styles.search_navigation}
    >
      <form action="">
        <div>
          <input
            value={search}
            placeholder={"İstənilən şeyi axtarın"}
            type="text"
            className={styles.navi_search_input}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <CiSearch className={styles.searchBar_search_icon} />
        </div>
      </form>
      <div
        onClick={() => {
          props.setTranslateY((prev) => (prev === -100 ? 0 : -100));
        }}
        className={styles.close_box}
      >
        <GrClose className={styles.close_icon} />
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [translateY, setTranslateY] = useState(-100);
  const [translateX, setTranslateX] = useState(-100);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navigation_container}>
        <SideBar translateX={translateX} setTranslateX={setTranslateX} />
        <SearchNav translateY={translateY} setTranslateY={setTranslateY} />
        <CartSidebar isOpen={isOpen} onClose={onClose} onOpen={onOpen} />

        <ul className={styles.navigation_list}>
          <li
            onClick={() => {
              routing.to(navigate, "/");
            }}
            className={styles.home_link}
          >
            Ana Səhifə
            <div className={styles.hover_box}>dassdasad</div>
          </li>
          <li
            onClick={() => {
              routing.to(navigate, "/shop");
            }}
            className={styles.shop_link}
          >
            Mağaza
            <div className={styles.hover_box}></div>
          </li>
          <li>Özəlliklər</li>
        </ul>
        <div
          className={styles.sidebar_opener}
          onClick={() => {
            setTranslateX((prev) => (prev === -100 ? 0 : -100));
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div style={{ fontSize: "26px" }} className={styles.navigation_logo}>
          {/* <img src={naviLogo} alt="" /> */}
          Luxe Sport
        </div>
        <ul className={styles.navigation_features}>
          <li
            onClick={() => {
              setTranslateY((prev) => (prev === -100 ? 0 : -100));
            }}
            className={styles.search_icon_container}
          >
            <BiSearchAlt className={styles.search_icon} />
          </li>
          <li
            onClick={() => {
              setIsLogin((prev) => !prev);
            }}
            className={styles.profile_icon_container}
          >
            <CgProfile className={styles.profile_icon} />
          </li>
          <li
            onClick={() => {
              onOpen();
            }}
            className={styles.cart}
          >
            <AiOutlineShopping className={styles.cart_icon} />
            <span>0</span>
          </li>
        </ul>
      </div>
      {isLogin && <LoginRegister setIsLogin={setIsLogin} />}
    </>
  );
};

export default Navigation;
