// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function OrgtreeIcon(props) {
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
          "M9.5 12.706c0-1.267 1.007-2.294 2.25-2.294S14 11.439 14 12.706C14 13.973 12.993 15 11.75 15S9.5 13.973 9.5 12.706zM5.75 3.294C5.75 2.027 6.757 1 8 1s2.25 1.027 2.25 2.294c0 1.267-1.007 2.294-2.25 2.294S5.75 4.561 5.75 3.294zm-1.5 7.118c-1.243 0-2.25 1.027-2.25 2.294C2 13.973 3.007 15 4.25 15s2.25-1.027 2.25-2.294c0-1.267-1.007-2.294-2.25-2.294zm3-4.441h1.5v.764h3.75v3.294H11V8.265H5v1.764H3.5V6.735h3.75v-.764z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default OrgtreeIcon
/* prettier-ignore-end */
