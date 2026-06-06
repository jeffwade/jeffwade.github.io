// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function EyeClosedIcon(props) {
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
          "M9.004 11.903A5.52 5.52 0 018 12c-2.6 0-6-2.134-7-5h2c.571 1.72 2.514 3.5 5 3.5s4.429-1.78 5-3.5h2c-.305.873-.832 1.678-1.492 2.376.01.048.026.088.044.121.068.128.205.259.453.445.052.04.11.081.172.126.453.326 1.103.794 1.377 1.616l-.949.316c-.165-.496-.534-.767-1-1.11l-.2-.148c-.221-.166-.48-.373-.662-.651a9.048 9.048 0 01-.725.54c-.04.183-.007.289.034.366.068.128.205.259.453.445.052.04.11.081.172.126.453.326 1.103.794 1.377 1.616l-.949.316c-.165-.496-.534-.767-1-1.11l-.2-.148c-.253-.19-.554-.433-.735-.774a1.436 1.436 0 01-.113-.276 8.327 8.327 0 01-1.04.441c-.038.182-.006.287.035.364.068.128.205.259.453.445.052.04.11.081.172.126.453.326 1.103.794 1.377 1.616l-.949.316c-.165-.496-.534-.767-1-1.11l-.2-.148c-.253-.19-.554-.433-.735-.774a1.42 1.42 0 01-.166-.565z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default EyeClosedIcon
/* prettier-ignore-end */
