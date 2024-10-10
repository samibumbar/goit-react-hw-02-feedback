import styles from "./statistic.module.css";

export interface Statistic {
  id: string;
  label: string;
  percentage: number;
}

export interface StatisticsProps {
  title: string;
  stats: Statistic[];
}

export function Statistics({ title, stats }: StatisticsProps) {
  const statsElement = stats.map((statistic) => {
    return (
      <li className={styles.item} key={statistic.id}>
        <span className={styles.label}>{statistic.label}</span>
        <span className={styles.percentage}>{statistic.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statsList}>{statsElement}</ul>
    </section>
  );
}
