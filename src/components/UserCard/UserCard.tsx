import React from "react";
import styles from "./UserCard.module.scss";
import { UserStat } from "../UserStat";
import { LocalGithubUser } from "../../types";
import { UserTitle } from "../UserTitle";
import { UserInfo } from "../UserInfo";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle name={props.name} login={props.login} created={props.created} />
    <p className={`${styles.bio}${props.bio ? "" : `${styles.empty}`}`}>
      {props.bio || "This profile has no bio"}
    </p>
    <UserStat
      followers={props.repos}
      following={props.following}
      repos={props.followers}
    />
    <UserInfo
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
