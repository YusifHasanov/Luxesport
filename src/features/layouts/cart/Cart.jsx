import React, { useMemo } from "react";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectAllCart } from "../../redux/cartSlice";
import { selectAllProducts } from "../../redux/productsSlice";
import { useGetSessionByUserIdQuery } from "./../../redux/shopSessionSlice";
import Input from "../../../companent/input/Input";
import { IoMdClose } from "react-icons/io";
const filterData = (allProducts, cart) => {
  let all = [];
  allProducts.forEach((product) => {
    cart.forEach((cart) => {
      if (cart.productId === product.id) {
        all.push({
          product,
          quantity: cart.quantity,
        });
      }
    });
  });
  return all;
};

const TableRow = ({ data }) => {
  return (
    <tr className={styles.table_item}>
      <td className={styles.product_image_title}>
        <div>
          <img src={data.product.image} alt="" />
        </div>
        <div>
          <p>{data.product.title}</p>
          <small>SM</small>
        </div>
      </td>
      <td className={styles.product_price}>${data.product.price}</td>
      <td>
        <Input />
      </td>
      <td>${data.product.price * data.quantity}</td>
      <td>
        <div>
          {" "}
          <IoMdClose />
        </div>
      </td>
    </tr>
  );
};

const Cart = () => {
  const { data: sessionData } = useGetSessionByUserIdQuery("1");
  const allCart = useSelector(selectAllCart);
  const cart = allCart?.filter((c) => c.sessionId !== sessionData?.id);
  const allProducts = useSelector(selectAllProducts);
  const all = useMemo(
    () => filterData(allProducts, allCart),
    [allProducts, allCart]
  );

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_header}>
        <h2>Cart</h2>
        <div className={styles.breadcrumbs}>
          <Link className={styles.link_home} to={"/"}>
            <span>HOME</span>
            <IoIosArrowForward className={styles.breadcrumbs_icon} />
          </Link>
          <p>CART</p>
        </div>
      </div>
      <div className={styles.cart_main}>
        <div>
          <table className={styles.cart_table}>
            <thead>
              <tr>
                <th>PRODUCT NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {all.map((i) => (
                <TableRow data={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
