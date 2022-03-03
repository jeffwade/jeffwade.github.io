import * as React from "react"
import { PlasmicPreview } from "./plasmic/jeffdo_es/PlasmicPreview"

function Preview_(props, ref) {
  const { variant, ...rest }
  return <PlasmicPreview variant={variant} root={ { ref }} {...rest} />
}

const Preview = React.forwardRef(Preview_)

export default Preview
