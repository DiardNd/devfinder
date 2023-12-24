import React from "react";
import styles from "./UserTitle.module.scss";
import { LocalGithubUser } from "../../types";

export interface UserTitleProps
  extends Pick<LocalGithubUser, "name" | "login" | "created"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));
  return (
    <div className={styles.userTitle}>
      <div className={styles.name}>
        <h2 className={styles.name}>{name}</h2>
        <h3>{login}</h3>
        <span>{joinedDate}</span>
      </div>
    </div>
  );
};
