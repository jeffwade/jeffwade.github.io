// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function PlasmicIcon(props) {
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
          "M.889 12c-.49 0-.894-.4-.84-.887a8 8 0 0115.902 0c.053.488-.35.887-.84.887h-.889a6.222 6.222 0 10-12.444 0h-.89z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.667 12a5.333 5.333 0 0110.666 0h-1.777a3.555 3.555 0 10-7.112 0H2.667z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.333 12a2.667 2.667 0 015.334 0H9.333c-.245 0-.435-.21-.553-.427a.89.89 0 00-1.56 0c-.118.217-.308.427-.553.427H5.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default PlasmicIcon
/* prettier-ignore-end */
