import React from "react";
import styles from "../BurgerButton/BurgerBtn.module.css";

export default function BurgerBtn(props) {

  return (
    <div
      onClick={props.handleClick}
      className={`${styles.nav_icon_6} ${props.clicked ? styles.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
