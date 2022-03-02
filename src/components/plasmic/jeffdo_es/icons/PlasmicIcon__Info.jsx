// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function InfoIcon(props) {
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
          "M8 16A8 8 0 108 0a8 8 0 000 16zM9.6 4a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM6.4 7.2h3.2s.4.8.4 1.6c0 .4-.3.8-.6 1.2-.3.4-.6.8-.6 1.2 0 .8.8 2.4.8 2.4H6.4s-.8-1.6-.8-2.4c0-.4.3-.8.6-1.2.3-.4.6-.8.6-1.2 0-.8-.4-1.6-.4-1.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default InfoIcon
/* prettier-ignore-end */
