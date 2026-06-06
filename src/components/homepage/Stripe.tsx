import styles from "./Stripe.module.css";

const colorMap: Record<string, string> = {
  grey: "#2B393C",
  red: "#F14A21",
  orange: "#FA9826",
  yellow: "#D6E437",
  green: "#36F53A",
  mint: "#0FEEBB",
  blue: "#71BDED",
  purple: "#BF69EA",
};

const labelTextColors = ["orange", "yellow", "green", "mint", "blue"];

interface StripeProps {
  name: string;
  label: string;
  icon?: React.ReactNode;
  color?: string;
  category?: string;
  highlighted?: boolean;
  lowlighted?: boolean;
  labelIsVisible?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function Stripe({
  name,
  label,
  icon,
  color = "grey",
  category,
  highlighted,
  lowlighted,
  labelIsVisible,
  href,
  onClick,
}: StripeProps) {
  const showLabel = labelIsVisible && !lowlighted;
  const bgColor = colorMap[color] || colorMap.grey;
  const textColor = labelTextColors.includes(color) ? "var(--color-black)" : "var(--color-white)";

  const className = [
    styles.root,
    highlighted ? styles.highlighted : "",
    lowlighted ? styles.lowlighted : "",
  ]
    .filter(Boolean)
    .join(" ");

  const Tag = href ? "a" : "button";

  return (
    <Tag
      className={className}
      onClick={onClick}
      href={href}
      style={href ? {} : { cursor: "pointer" }}
    >
      <div
        className={styles.title}
        style={{ background: bgColor }}
      >
        {icon && <span className={styles.icon} style={{ color: textColor }}>{icon}</span>}
        <span className={styles.label} style={{ color: textColor }}>
          {label}
        </span>
      </div>
    </Tag>
  );
}
