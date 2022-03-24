import * as React from "react"
import { PlasmicWorkCard } from "./plasmic/jeffdo_es/PlasmicWorkCard"

function WorkCard_(props, ref) {
  const { href, ...rest } = props

  return (
    <PlasmicWorkCard
      {...rest}
      root={{
        ref,
        as: href ? "a" : undefined,
      }}
      href={href}
    />
  )
}

const WorkCard = React.forwardRef(WorkCard_)

export default WorkCard
