// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function ProcessingIcon(props) {
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
          "M12.683 10.31C11.62 11.375 10.097 12 8.248 12V9c1.15 0 1.878-.374 2.314-.81.45-.451.686-1.061.686-1.69s-.236-1.239-.686-1.69C10.126 4.375 9.398 4 8.248 4V1c1.85 0 3.372.626 4.435 1.69a5.378 5.378 0 011.565 3.81 5.378 5.378 0 01-1.565 3.81z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2.245 10.004L1.048 11.6l2.4 1.8 6-8-2.4-1.8L4.35 7.196 5.683 9.86l-2.808 1.405-.63-1.26z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M2.338 9.879l.6 1.198 2.557-1.28-1.238-2.476-1.919 2.558z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M1 7.202l2.558-1.279 1.937 3.875-2.558 1.279L1 7.202z"}
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default ProcessingIcon
/* prettier-ignore-end */
