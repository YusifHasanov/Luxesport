import React,{useState} from "react";
import styles from './input.module.css'
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Input = () => {
    const [prodactQuantty, setProdactQuantty] = useState(1);
    const productQuantityChanger = (paramsQuantity) =>
    setProdactQuantty((prev) => prev + paramsQuantity);
  return (
    <div style={{margin:"auto"}} className={styles.add_to_card_input}>
      <input
        type="number"
        name="number"
        id="number"
        value={prodactQuantty}
        onChange={(e) => setProdactQuantty(e.target.value)}
      />
      <div className={styles.arrow_box}>
        <MdOutlineKeyboardArrowUp
          onClick={() => {
            productQuantityChanger(1);
          }}
        />
        <MdOutlineKeyboardArrowDown
          onClick={
            prodactQuantty > 1
              ? () => {
                  productQuantityChanger(-1);
                }
              : null
          }
        />
      </div>
    </div>
  );
};

export default Input;
