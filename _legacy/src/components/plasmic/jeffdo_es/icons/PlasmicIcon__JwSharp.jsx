// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function JwSharpIcon(props) {
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
          "M7 5H6V4l1 1zM6 5h1l1 1v1H6V5zm4 4h1l1 1v1h-2V9zM6 7h2v2H6zm0 2h2v2H6zm0 2h2v2H6zm0 2h2v2H6zm2 0h2v2H8zm2-2h2v2h-2zm5 2h-1v-1l1 1zm-2 0h1v-1l-1 1zm-4 0h1v-1l-1 1zm5 2l1.5-1.5-.5-.5h-1v2zm-4 0l2-2h-2v2zm2-2h2v2h-2zm-1-4h-1V8l1 1zM0 1h2v2H0zm2 0h1l1 1v1H2V1zM1 13h1v-1l-1 1zm1 2l2-2H2v2zM2 3h2v2H2zm0 2h2v2H2zm0 2h2v2H2zm0 2h2v2H2zm0 2h2v2H2zm-2 2h2v2H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default JwSharpIcon
/* prettier-ignore-end */
