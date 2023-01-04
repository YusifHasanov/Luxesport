import React, { useState } from "react";
import styles from "./loginregister.module.css";
import header from "./../../assets/loginHeader.avif";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
export const close = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="#fff"
      stroke-width="2"
      d="M3,3 L21,21 M3,21 L21,3"
    ></path>
  </svg>
);
const LoginRegister = (props) => {
  const [isTrue, setIsTrue] = useState(true);
  const [register, setRegister] = useState({ email: "", password: "" });
  const [login, setLogin] = useState({ email: "", password: "" });

  const submitLoginHandler = (e) => {
    e.preventDefault();
  };

  const submitRegisterHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginRegisterContainer}>
      {isTrue ? (
        <div className={styles.loginContainer}>
          <div
            className={styles.closeBox}
            onClick={() => {
              props.setIsLogin((prev) => !prev);
            }}
          >
            {close}
          </div>
          <div className={styles.header}>
            <img src={header} alt="" />
            <HiOutlineUserCircle className={styles.login_profile_icon} />
          </div>
          <h2>Great to have you back!</h2>
          <form
            onSubmit={submitLoginHandler}
            className={styles.loginForm}
            action=""
          >
            <input
              placeholder={"Email adress"}
              type="email"
              value={login.email}
              onChange={(e) => {
                setLogin((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
            <input
              placeholder={"Password"}
              type="password"
              value={login.password}
              onChange={(e) => {
                setLogin((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />
            <span>Forgot your password?</span>
            <button type={"submit"} className={styles.loginButton}>
              Login
            </button>
          </form>
          <div className={styles.go_register}>
            Dont have an account?
            <span
              onClick={() => {
                setIsTrue((prev) => !prev);
              }}
            >
              Register now{" "}
            </span>
          </div>
          <div className={styles.go_register_sidebar}>
            <div className={styles.or_box}>
              <div></div>
              <span>OR</span>
              <div></div>
            </div>
            <div
              onClick={() => {
                setIsTrue((prev) => !prev);
              }}
              style={{ textAlign: "center", cursor: "pointer" }}
            >
              Register now{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.registerContainer}>
          <div
            className={styles.closeBox}
            onClick={() => {
              props.setIsLogin((prev) => !prev);
            }}
          >
            {close}
          </div>
          <div className={styles.registerHeader}>
            <BsPencilSquare className={styles.penciIcon} />
            <span>Register</span>
          </div>

          <form
            onSubmit={submitRegisterHandler}
            className={styles.registerForm}
            action=""
          >
            <input
              placeholder={"Email adress"}
              type="email"
              onChange={(e) => {
                setRegister((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
            <input
              placeholder={"Password"}
              type="password"
              value={register.password}
              onChange={(e) => {
                setRegister((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />

            <button type={"submit"} className={styles.registerButton}>
              Register
            </button>
          </form>
          <div
            className={styles.back_login}
            onClick={() => {
              setIsTrue((prev) => !prev);
            }}
          >
            Back to login
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
