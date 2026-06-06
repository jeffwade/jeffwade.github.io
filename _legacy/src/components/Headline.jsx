import * as React from "react"
import { PlasmicHeadline } from "./plasmic/jeffdo_es/PlasmicHeadline"

function Headline_(props, ref) {

  return (
    <PlasmicHeadline
      root={{ ref }}
      {...props}
    />
  )
}

const Headline = React.forwardRef(Headline_)

export default Headline
