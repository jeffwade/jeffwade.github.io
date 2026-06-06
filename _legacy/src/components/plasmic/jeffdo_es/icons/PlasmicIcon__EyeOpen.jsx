// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function EyeOpenIcon(props) {
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
          "M6.536 3.2a1.433 1.433 0 00-.126-.326c-.182-.34-.483-.585-.735-.774l-.201-.149c-.465-.342-.834-.613-1-1.11l-.948.317c.274.822.924 1.29 1.376 1.616.062.044.12.086.173.126.248.186.384.317.453.445.024.045.045.1.05.174a8.75 8.75 0 00-1.088.534 1.42 1.42 0 00-.08-.179c-.182-.34-.483-.585-.735-.774l-.201-.149c-.466-.342-.834-.613-1-1.11l-.948.317c.274.822.924 1.29 1.376 1.616.062.044.12.086.173.126.248.186.384.317.453.445.037.07.067.163.043.317a8.896 8.896 0 00-.723.607c-.183-.287-.448-.5-.673-.669l-.201-.149c-.465-.342-.834-.613-1-1.11l-.948.317C.3 4.48.95 4.948 1.402 5.274c.062.044.12.086.173.126.248.186.384.317.453.445.031.06.058.136.05.252A6.459 6.459 0 001 8c1 2.866 4.4 5 7 5 2.6 0 6-2.134 7-5-1-2.866-4.4-5-7-5-.468 0-.962.07-1.464.2zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default EyeOpenIcon
/* prettier-ignore-end */
