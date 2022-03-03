import * as React from "react";
import { useState } from "react";
import { PlasmicStripe } from "./plasmic/jeffdo_es/PlasmicStripe";
import useTooltip from "../hooks/useTooltip";
import useMousePosition from "../hooks/useMousePosition";
import HeadlineButton from "../components/HeadlineButton";

function Stripe_(props, ref) {
  const {label, labelIsVisible, icon, category, color, mode, revealed, highlighted, ...rest} = props;
  const [isHovered, setIsHovered] = useState(false);

  const mousePosition = useMousePosition();

  const labelStyles = {
    position: "absolute",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    left: mousePosition.x - 32,
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const stripeLabel = (
    <div style={labelStyles}>
      { icon }
      { label }
    </div>
  );

  const tooltipLabel = labelIsVisible ? [icon, icon, label, icon, icon] : null;
  // const content = <Preview variant={}/>;
  const content = "content coming soon";
  const tooltip = useTooltip(color, tooltipLabel, content);

  return (
    <>
      { isHovered && tooltip }
      <PlasmicStripe
        root={{ ref }}
        color={color}
        icon={null}
        category={category}
        mode={mode}
        highlighted={highlighted}
        {...rest}
        label={stripeLabel}
        onMouseOver={ () => setIsHovered(true) }
        onMouseOut={ () => setIsHovered(false) }
        // onFocus={ () => showTooltip("nomouse")}
      />
    </>
  )
}

const Stripe = React.forwardRef(Stripe_);

export default Stripe;
