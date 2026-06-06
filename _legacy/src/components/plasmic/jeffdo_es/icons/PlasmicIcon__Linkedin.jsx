// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function LinkedinIcon(props) {
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
          "M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51V7.04h.031a2.494 2.494 0 012.246-1.233c2.403 0 2.846 1.58 2.846 3.637l-.001 4.188zM3.56 4.954a1.376 1.376 0 110-2.751 1.376 1.376 0 010 2.751zm1.185 8.68H2.372V5.997h2.373v7.635zM14.815 0H1.18A1.168 1.168 0 000 1.154v13.691A1.168 1.168 0 001.18 16h13.635A1.17 1.17 0 0016 14.845V1.153A1.17 1.17 0 0014.815 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LinkedinIcon
/* prettier-ignore-end */
