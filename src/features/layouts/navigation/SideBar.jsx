import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import LoginRegister from "../LoginRegister/LoginRegister";

const SideBar = (props) => {
  const [isMenu, setIsMnue] = useState(true);

  return (
    <div
      className={styles.SideBarContainer}
      style={{ transform: `translateX(${props.translateX}%` }}
    >
      <div className={styles.sidebar_header}>
        <div
          onClick={() => {
            setIsMnue((prev) => !prev);
          }}
          className={`${isMenu ? styles.menu_side_active : styles.menu_side}`}
        >
          <div className={styles.menu_button}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span>MENU</span>
        </div>
        <div
          onClick={() => {
            setIsMnue((prev) => !prev);
          }}
          className={`${
            isMenu ? styles.sidebar_profile : styles.sidebar_profile_active
          }`}
        >
          <HiOutlineUserCircle className={styles.sidebar_profile_icon} />
          Login
        </div>
      </div>
      <div className={styles.sidebar_body}>
        {isMenu ? (
          <ul className={styles.sidebar_list}>
            <li>
              Home <IoIosArrowForward />
            </li>
            <li>
              Shop <IoIosArrowForward />
            </li>
            <li>
              Fetured <IoIosArrowForward />
            </li>
          </ul>
        ) : (
          <div>
            <LoginRegister/>
          </div>
        )}
      </div>
      <button
        className={styles.sidebar_close}
        onClick={() => {
          props.setTranslateX((prev) => (prev === -100 ? 0 : -100));
        }}
      >
        <AiOutlineClose className={styles.sidebar_close_icon} />
        Close
      </button>
    </div>
  );
};
export default SideBar;
