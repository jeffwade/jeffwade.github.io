// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function FaceIcon(props) {
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
          "M16 8A8 8 0 110 8a8 8 0 0116 0zm-5-2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 11.5L6.5 2h1.2l-1.2 8H8v1.5H5zm5-1.5h3.5c-.5 2-3 4-5.5 4 2-1.5 2.5-2.5 2-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default FaceIcon
/* prettier-ignore-end */
