"use client";

import { FunctionComponent } from "react";
import { Button } from "@/components/ui/button";

import { Github } from "lucide-react";

import styles from "@/styles/header/header.module.scss";
import Search from "./search";

const Header: FunctionComponent<any> = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["left"]}></div>
        <div className={styles["center"]}></div>
        <div className={styles["right"]}>
          <Search />
          <Button variant="outline" size="icon">
            <Github />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
