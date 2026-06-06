import * as React from "react"
import { useState } from "react"
import { PlasmicCaseStudy } from "./plasmic/jeffdo_es/PlasmicCaseStudy"

function CaseStudy_(props, ref) {

  return (
    <PlasmicCaseStudy
      root={{ ref }}
      {...props}
    />
  )
}

const CaseStudy = React.forwardRef(CaseStudy_)

export default CaseStudy
