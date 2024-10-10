import { FriendListItem, FriendListItemProps } from "../friend-list-item";
import styles from "./friend-list.module.css";

export interface FriendListProps {
  friends: FriendListItemProps[];
}

export function FriendList({ friends }: FriendListProps) {
  const friendsElement = friends.map((friend) => {
    return <FriendListItem {...friend} key={friend.id} />;
  });

  return <ul className={styles.container}>{friendsElement}</ul>;
}
