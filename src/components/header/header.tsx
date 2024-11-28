import { FunctionComponent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Github } from "lucide-react";

import Search from "./search";
import Logo from "../svg/logo";

import styles from "@/styles/header/header.module.scss";

const Header: FunctionComponent<any> = () => {
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
          <Button variant="outline" size="icon">
            <Github />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
