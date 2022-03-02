import * as React from "react"
import { PlasmicTooltip } from "./plasmic/jeffdo_es/PlasmicTooltip"

function Tooltip_(props, ref) {
  return <PlasmicTooltip root={{ ref }} {...props} />
}

const Tooltip = React.forwardRef(Tooltip_)

export default Tooltip
