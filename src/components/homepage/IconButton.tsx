import styles from "./IconButton.module.css";

interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export default function IconButton({ icon, label, onClick }: IconButtonProps) {
  return (
    <button
      className={styles.root}
      onClick={onClick}
      aria-label={label}
      title={label}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}
