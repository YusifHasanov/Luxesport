import React, { useEffect, useMemo } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useGetSessionByUserIdQuery } from "../../redux/shopSessionSlice";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";
import { selectAllCart } from "../../redux/cartSlice";
import { selectAllProducts } from "../../redux/productsSlice";
import { routing } from "../../../globalRouting";
import { useNavigate } from "react-router-dom";

const CartItem = ({ data, onClose }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.cart_item}>
      <div className={styles.product_image}>
        <img
          src={data.product.image}
          onClick={() => {
            routing.to(navigate, `/shop/${data.product.id}`);
            onClose();
          }}
        />
      </div>
      <div className={styles.product_detail}>
        <p>{data.product.title}</p>
        <div className={styles.product_info}>
          <div className={styles.product_quanity}>QTY : {data.quantity}</div>
          <div className={styles.product_price}>
            <span className={styles.price_sale}>${data.product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
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
const CartSidebar = ({ isOpen, onClose }) => {
  const { data: sessionData } = useGetSessionByUserIdQuery("1");
  const allCart = useSelector(selectAllCart);
  const cart = allCart?.filter((c) => c.sessionId !== sessionData?.id);
  const allProducts = useSelector(selectAllProducts);
  const navigate = useNavigate();

  const all = useMemo(
    () => filterData(allProducts, allCart),
    [allProducts, allCart]
  );

  const totalPrice = useMemo(() => {
    let total = 0;
    all.forEach((t) => {
      total += parseFloat(t.product.price) * parseInt(t.quantity);
    });
    return total;
  }, [all]);

  return (
    <Drawer
      className={styles.cart_sidebar}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size={"sm"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <div className={styles.cart}>
          <div>
            <div className={styles.cart_sidebar_header}>
              <DrawerCloseButton
                className={styles.top_close_btn}
                position={"static"}
              />
              <div className={styles.cart_sidebar_title}>SHOPPING CART</div>
              <div className={styles.cart_sidebar_quantity}>
                {all ? all.length : 0}
              </div>
            </div>
            <div className={styles.cart_sidebar_body}>
              {all?.length === 0 ? (
                <div>empty</div>
              ) : (
                all.map((cartItem, id) => (
                  <div key={cartItem.id}>
                    {<CartItem data={cartItem} onClose={onClose} />}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={styles.cart_footer}>
            <div>
              <div>Total</div>
              <div>${totalPrice}</div>
            </div>
            <div>
              <button
                onClick={() => {
                  routing.to(navigate, "/cart");
                  onClose();
                }}
                className={styles.view_cart}
              >
                VIEW CART
              </button>
              <button className={styles.check_out}>CHECK OUT</button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartSidebar;
