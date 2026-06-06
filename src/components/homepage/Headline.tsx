import styles from "./Headline.module.css";

interface HeadlineProps {
  first?: React.ReactNode;
  end?: React.ReactNode;
}

export default function Headline({ first, end }: HeadlineProps) {
  return (
    <div className={styles.root}>
      <div className={styles.slot}>{first}</div>
      <h1 className={styles.text}>does</h1>
      <div className={styles.slot}>{end}</div>
    </div>
  );
}
