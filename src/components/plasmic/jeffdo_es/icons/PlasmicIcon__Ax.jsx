// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function AxIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#jPHHffaL2a)"}>
        <path
          d={
            "M5.717 9.69C2.063 9.854.08 6.132 0 4.23c2.088-.093 4.777-.422 6.118-2.274l2.15 2.275-.637 1.027c.369.742 7.142 7.03 8.1 7.734.958.703-.883 2.219-1.748 1.983-.866-.235-.697-1.308-1.47-2.315-.771-1.008-6.003-6.016-6.193-5.914 0 0-.72.091-.603 2.944z"
          }
          fill={"#283134"}
        ></path>
      </g>

      <defs>
        <clipPath id={"jPHHffaL2a"}>
          <path fill={"#fff"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default AxIcon
/* prettier-ignore-end */
