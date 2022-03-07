// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function TrackIcon(props) {
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
          "M8.301 8.194c1.86-.045 1.81 2.285 2.236 2.804.426.52 1.04 1.29 1.703 1.559.663.27.086 2.221-.309 2.903-.345.596-1.882-.205-3.389-.267-1.43-.059-2.834.644-3.161.267-.353-.405-.5-.832-.806-2.384-.277-1.413 1.278-2.078 1.704-2.597.426-.52.133-2.24 2.022-2.285z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.779 9.965c-.158.992-1.17 1.655-2.261 1.48-1.091-.173-1.847-1.118-1.69-2.11.159-.991 1.386-3 2.477-2.827 1.09.174 1.632 2.465 1.474 3.457zM12.61 4.481a2 2 0 01-3.979.416c-.115-1.098.527-3.574 1.625-3.689 1.099-.115 2.239 2.174 2.354 3.273zm-4.147.398a2 2 0 11-3.983-.378c.105-1.1 1.223-3.4 2.323-3.296 1.1.105 1.764 2.574 1.66 3.674zM5.648 8.874c.241.975-.432 1.98-1.504 2.246-1.073.265-2.138-.31-2.379-1.284-.241-.975.104-3.304 1.176-3.57C4.013 6.002 5.406 7.9 5.648 8.874z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default TrackIcon
/* prettier-ignore-end */
