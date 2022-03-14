// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function PaintIcon(props) {
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
          "M11.206 9.148c-1.878 2.51-2.379 1.765-3.216 1.138-.837-.626-1.693-.896.185-3.406 1.878-2.51 5.779-6.308 6.616-5.682.837.627-1.707 5.44-3.585 7.95zM8 11.5c0 .828-.823 1.5-1.838 1.5-5.054 0-2.757-.5-1.838-1.5.92-1 .823-1.5 1.838-1.5C7.177 10 8 10.672 8 11.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 13h16v1H0v-1z"}
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default PaintIcon
/* prettier-ignore-end */
