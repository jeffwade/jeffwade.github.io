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
          "M10.664 8.634c.69-1.156 1.086-1.82 1.086-2.884a3.75 3.75 0 10-7.5 0c0 1.064.396 1.728 1.086 2.884C5.99 9.73 6.906 11.265 8 14c1.094-2.735 2.01-4.271 2.664-5.366zM8 8a2 2 0 100-4 2 2 0 000 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LocationIcon
/* prettier-ignore-end */
