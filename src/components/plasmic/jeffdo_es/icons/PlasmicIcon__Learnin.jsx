// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function LearninIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.275 2.364A1 1 0 001 3.326v8.92a1 1 0 00.725.961L8 15l6.275-1.793a1 1 0 00.725-.961v-8.92a1 1 0 00-1.275-.962L8 4 2.275 2.364zm.453 2.787a.5.5 0 10-.243.97l3.03.758a.5.5 0 10.242-.97l-3.03-.758zm0 2a.5.5 0 10-.243.97l3.03.758a.5.5 0 10.242-.97l-3.03-.758zM2.12 9.515a.5.5 0 01.607-.364l2.06.515a.5.5 0 01-.243.97l-2.06-.515a.5.5 0 01-.364-.606zM13.515 6.12a.5.5 0 10-.243-.97l-3.03.758a.5.5 0 10.243.97l3.03-.758zm-.97 2.2a.5.5 0 10-.243-.97l-2.06.515a.5.5 0 00.243.97l2.06-.515zm.97 1.558a.5.5 0 10-.243-.97l-3.03.757a.5.5 0 10.243.97l3.03-.757z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LearninIcon
/* prettier-ignore-end */
