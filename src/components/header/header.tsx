"use client";

import { FunctionComponent } from "react";

import styles from "@/styles/header/header.module.scss";

const Header: FunctionComponent<any> = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["left"]}></div>
        <div className={styles["center"]}></div>
        <div className={styles["right"]}></div>
      </div>
    </header>
  );
};

export default Header;
