// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function NeovimIcon(props) {
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
        d={
          "M3 4.182L5.308 2 13 11.818 10.692 14 3 4.182zm10 .363L10.308 2v6L13 11.454V4.545z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.692 14V8L3 4.545v6.91L5.692 14zm-.769-1.756V8.24L3.77 6.759v4.394l1.154 1.091z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default NeovimIcon
/* prettier-ignore-end */
