import { FunctionComponent } from "react";
import Link from "next/link";

import Search from "./search";
import Logo from "../svg/logo";
import HeaderMenu from "./header-menu";

import styles from "@/styles/header/header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["left"]}>
          <Link href={"/"} className={styles["home"]}>
            <Logo />
          </Link>
        </div>
        <div className={styles["center"]}></div>
        <div className={styles["right"]}>
          <Search />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
