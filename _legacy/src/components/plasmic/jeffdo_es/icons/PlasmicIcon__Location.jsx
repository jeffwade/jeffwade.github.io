// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function LocationIcon(props) {
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
          "M11.108 8.74c.805-1.35 1.267-2.124 1.267-3.365a4.375 4.375 0 00-8.75 0c0 1.241.462 2.016 1.267 3.365C5.654 10.017 6.724 11.81 8 15c1.276-3.19 2.346-4.983 3.108-6.26zM8 8a2.333 2.333 0 100-4.667A2.333 2.333 0 008 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LocationIcon
/* prettier-ignore-end */
