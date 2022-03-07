// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function DribbbleIcon(props) {
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
          "M8 16A8 8 0 108 0a8 8 0 000 16zM1 8c0-3.864 3.136-7 7-7 3.857 0 7 3.136 7 7s-3.143 7-7 7c-3.864 0-7-3.136-7-7zm12.975-.053a5.951 5.951 0 00-1.351-3.72c-.13.167-1.132 1.457-3.333 2.353.136.281.273.577.394.866.02.044.037.088.055.132.024.061.048.121.075.179 1.935-.244 3.856.13 4.14.186l.02.004zm-2.012-4.411A5.966 5.966 0 008 2.033a6.08 6.08 0 00-1.405.159l.008.01c.192.261 1.26 1.717 2.225 3.49 2.125-.797 3.029-2.004 3.135-2.156zm-4.29 2.513a37.73 37.73 0 00-2.216-3.455 6.007 6.007 0 00-3.31 4.184h.015c.335 0 2.766.002 5.512-.73zM2.018 7.825v.183c0 1.533.585 2.938 1.534 3.993.137-.228 1.777-2.946 4.859-3.94l.117-.034.118-.035a17.784 17.784 0 00-.486-1.017c-2.983.896-5.884.858-6.142.85zm2.316 4.897A5.937 5.937 0 008 13.982a5.88 5.88 0 002.338-.478 24.719 24.719 0 00-1.275-4.532c-.008.004-.013.005-.02.007a.131.131 0 00-.018.008c-3.371 1.177-4.586 3.515-4.692 3.735zm5.838-4.024c.782 2.15 1.101 3.895 1.162 4.26a5.928 5.928 0 002.559-4.001c-.205-.069-1.845-.555-3.72-.259z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default DribbbleIcon
/* prettier-ignore-end */
