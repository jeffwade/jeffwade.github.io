// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function CloseIcon(props) {
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
          "M2.683 14.163c2.21-1.764 3.961-3.815 5.683-5.827 1.73-2.022 3.432-4.007 5.575-5.717l-.624-.782c-2.228 1.779-3.988 3.836-5.71 5.849-1.731 2.022-3.423 4-5.548 5.695l.624.782zm11.275-.618c-1.68-2.275-3.662-4.102-5.608-5.898-1.956-1.805-3.875-3.58-5.504-5.786l-.804.594c1.693 2.293 3.683 4.13 5.63 5.926 1.955 1.806 3.867 3.572 5.482 5.758l.804-.594z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default CloseIcon
/* prettier-ignore-end */
