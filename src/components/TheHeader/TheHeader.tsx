import { useState } from "react";
import styles from "./TheHeader.module.scss";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const TheHeader = () => {
  const [findUser, setFindUser] = useState("");

  return (
    <div className={styles.TheHeader}>
      <div className={styles.logo}>
        <h1>DevFinder</h1>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
