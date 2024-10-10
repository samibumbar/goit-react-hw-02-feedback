import {
  FriendList,
  Profile,
  Statistics,
  TransactionHistory,
} from "./components";
import styles from "./app.module.css";
import userData from "./data/user.json";
import statsData from "./data/stats.json";
import friendsData from "./data/friends.json";
import transactionsData from "./data/transactions.json";

export default function App() {
  return (
    <main className={styles.container}>
      <section className={styles.middleSection}>
        <div className={styles.profile}>
          <Profile
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}
          />
        </div>

        <div className={styles.statistics}>
          <Statistics title="Upload Stats" stats={statsData} />
        </div>

        <div className={styles.transactions}>
          <TransactionHistory items={transactionsData} />
        </div>
      </section>

      <section className={styles.friendList}>
        <FriendList friends={friendsData} />
      </section>
    </main>
  );
}
