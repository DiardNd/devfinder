import { useState } from "react";
import styles from "./TheHeader.module.scss";

interface TheHeaderProps {}

export const TheHeader = ({}: TheHeaderProps) => {
  const [findUser, setFindUser] = useState("");

  const toFind = () => {
    console.log(findUser);

    // this.preventDefault();
  };

  return (
    <div className={styles.TheHeader}>
      <img src="lupa" alt="" />
      <input
        className="input"
        placeholder="gitHub username..."
        onChange={(e) => setFindUser(e.target.value)}
        value={findUser}
      />
      <button className="btn" onClick={toFind}>
        Search
      </button>
    </div>
  );
};
