import * as React from "react";
import { useState } from "react";
import { PlasmicIconButton } from "./plasmic/jeffdo_es/PlasmicIconButton";
import useTooltip from "../hooks/useTooltip";

function IconButton_(props, ref) {
  const { label, ...rest } = props;

  const [isHovered, setIsHovered] = useState(false);
  const tooltip = useTooltip("mint", label, null, "none", "none", true);

  return (
    <>
      { isHovered && tooltip }
      <PlasmicIconButton
        label={ label }
        root={{ ref }}
        {...rest}
        onMouseOver={ () => setIsHovered(true) }
        onMouseOut={ () => setIsHovered(false) }
      />
    </>
  );
}

const IconButton = React.forwardRef(IconButton_)

export default IconButton
