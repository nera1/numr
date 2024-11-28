import Header from "@/components/header/header";

import CategorySelect from "@/components/category-select/category-select";
import OrderSelect from "@/components/order-select/order-select";

import styles from "@/styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles["index"]}>
        <div className={styles["container"]}>
          <div className={styles["options-container"]}>
            <CategorySelect />
            <OrderSelect />
          </div>
        </div>
      </main>
    </>
  );
}
