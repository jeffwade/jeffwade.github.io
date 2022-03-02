import * as React from "react"
import { PlasmicPreview } from "./plasmic/jeffdo_es/PlasmicPreview"

function Preview_(props, ref) {
  return <PlasmicPreview root={{ ref }} {...props} />
}

const Preview = React.forwardRef(Preview_)

export default Preview
