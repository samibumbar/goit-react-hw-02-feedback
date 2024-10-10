import styles from "./profile.module.css";

export interface ProfileProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: Stats;
}

export interface Stats {
  followers: number;
  views: number;
  likes: number;
}

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats,
}: ProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
      </ul>
    </div>
  );
}
