import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
