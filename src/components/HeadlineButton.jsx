import * as React from "react"
import { PlasmicHeadlineButton } from "./plasmic/jeffdo_es/PlasmicHeadlineButton"
import { useState } from "react";
import useTooltip from "../hooks/useTooltip";

function HeadlineButton_(props, ref) {
  const {color, label} = props;
  const [isHovered, setIsHovered] = useState(false);
  const tooltip = useTooltip(color, label, true, false);

  return (
    <>
      {isHovered ? tooltip : null}
      <PlasmicHeadlineButton
        root={{ ref }}
        {...props}

        onMouseOver={ () => setIsHovered(true) }
        onMouseOut={ () => setIsHovered(false) }
      />
    </>
  );
}

const HeadlineButton = React.forwardRef(HeadlineButton_)

export default HeadlineButton
