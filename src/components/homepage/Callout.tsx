import { ThirtysixIcon, TwentytwoIcon, ArrowRightIcon } from "../icons";
import styles from "./Callout.module.css";

export default function Callout() {
  return (
    <a
      className={styles.root}
      href="/36dot22"
      target="_blank"
      title="36 Days of Type, 2022 Edition"
    >
      <div className={styles.iconGroup}>
        <ThirtysixIcon className={styles.icon36} />
        <TwentytwoIcon className={styles.icon22} />
      </div>
      <span className={styles.text}>Now serving 36 days of type</span>
      <ArrowRightIcon className={styles.arrow} />
    </a>
  );
}
