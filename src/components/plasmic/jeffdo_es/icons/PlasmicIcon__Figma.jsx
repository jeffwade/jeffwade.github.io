// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function FigmaIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.533 8A1.833 1.833 0 1111.2 8a1.833 1.833 0 01-3.667 0zm-3.196 5.963a1.833 1.833 0 011.296-3.13h1.834v1.834a1.833 1.833 0 01-3.13 1.296zm5.03-8.796H7.533V1.5h1.834a1.833 1.833 0 110 3.667zm-5.03-.537A1.833 1.833 0 015.633 1.5h1.834v3.667H5.633c-.486 0-.952-.193-1.296-.537zm0 4.666a1.833 1.833 0 011.296-3.13h1.834v3.667H5.633c-.486 0-.952-.193-1.296-.537z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  )
}

export default FigmaIcon
/* prettier-ignore-end */
