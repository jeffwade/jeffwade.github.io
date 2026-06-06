import * as React from "react"
import { PlasmicPreview } from "./plasmic/jeffdo_es/PlasmicPreview"

function Preview_(props, ref) {
  const { name, ...rest } = props;
  return <PlasmicPreview name={name} root={ { ref }} {...rest} />
}

const Preview = React.forwardRef(Preview_)

export default Preview
