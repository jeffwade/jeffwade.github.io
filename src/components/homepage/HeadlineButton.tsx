import { useState } from "react";
import styles from "./HeadlineButton.module.css";

interface HeadlineButtonProps {
  label: string;
  word: string;
  symbol?: string;
  color?: string;
  onClick?: () => void;
}

export default function HeadlineButton({
  label,
  word,
  symbol,
  onClick,
}: HeadlineButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.root}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={1}
    >
      <h1 className={styles.word}>
        <span className={styles.symbol}>{symbol || "*"}</span>
        {word}
      </h1>
    </div>
  );
}
