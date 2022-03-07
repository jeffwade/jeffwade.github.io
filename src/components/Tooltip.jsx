import * as React from "react"
import { PlasmicTooltip } from "./plasmic/jeffdo_es/PlasmicTooltip"

function Tooltip_(props, ref) {
  const { mobile } = props;

  let tooltip = 
       <PlasmicTooltip
        root={{ ref }}
        {...props}
      /> 

  return (tooltip);
}

const Tooltip = React.forwardRef(Tooltip_)

export default Tooltip
