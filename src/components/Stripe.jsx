import * as React from "react";
import { useEffect, useState } from "react";
import { PlasmicStripe } from "./plasmic/jeffdo_es/PlasmicStripe";
import useTooltip from "../hooks/useTooltip";
import useMousePosition from "../hooks/useMousePosition";
import HeadlineButton from "../components/HeadlineButton";
import Preview from "../components/Preview";

function Stripe_(props, ref) {
  const {
    name,
    label,
    icon,
    category,
    color,
    mode,
    highlighted,
    lowlighted,
    revealed,
    labelIsVisible,
    ...rest} = props;
  const [isHovered, setIsHovered] = useState(false);

  const mousePosition = useMousePosition();

  const mediaQuery = window.matchMedia("(max-width: 768px)")
  const [mobile, setMobile] = useState(mediaQuery.matches)
  useEffect(() => {
    mediaQuery.addEventListener("change", e => setMobile(e.matches))
  }, [])

  const labelStyles = {
    position: "absolute",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  if (!mobile) {
    if (mousePosition.x > window.innerWidth / 2) {
      labelStyles["left"] = "auto";
      labelStyles["right"] = window.innerWidth - mousePosition.x + 15;
      labelStyles["flexDirection"] = "row-reverse";
    } else {
      labelStyles["left"] = mousePosition.x + 15;
      labelStyles["right"] = "auto";
      labelStyles["flexDirection"] = "row";
    }
  } else {
    labelStyles["left"] = "auto";
    labelStyles["right"] = "auto";
  }

  const stripeLabel = (
    <div style={labelStyles}>
      { icon }
      { label }
    </div>
  );

  const tooltipLabel = labelIsVisible ? [icon, label, icon] : null;
  const content = <Preview name={name}/>;
  const tooltip = useTooltip(color, tooltipLabel, content, "334", "480px", false);

  return (
    <>
      { isHovered && tooltip }
      <PlasmicStripe
        root={{ ref }}
        name={name}
        color={color}
        icon={null}
        category={category}
        mode={mode}
        highlighted={highlighted}
        lowlighted={lowlighted}
        {...rest}
        label={stripeLabel}

        onMouseOver={ () => setIsHovered(true) }
        onFocus={ () => setIsHovered(true) }
        onMouseOut={ () => setIsHovered(false) }
        onBlur={ () => setIsHovered(false) }
      />
    </>
  )
}

const Stripe = React.forwardRef(Stripe_);

export default Stripe;
