import styles from "./friend-list-item.module.css";
import classNames from "classnames";

export interface FriendListItemProps {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export function FriendListItem({
  avatar,
  name,
  isOnline,
}: FriendListItemProps) {
  return (
    <li className={styles.container}>
      <span
        className={classNames(
          styles.status,
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
