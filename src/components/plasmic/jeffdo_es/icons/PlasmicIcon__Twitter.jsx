// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function TwitterIcon(props) {
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
          "M5.032 14.437c6.038 0 9.34-4.988 9.34-9.313a9.29 9.29 0 00-.01-.423A6.664 6.664 0 0016 3.006a6.56 6.56 0 01-1.885.515 3.287 3.287 0 001.443-1.81 6.595 6.595 0 01-2.084.794 3.283 3.283 0 00-2.396-1.034 3.278 3.278 0 00-3.198 4.02 9.33 9.33 0 01-6.767-3.42A3.268 3.268 0 002.13 6.44a3.265 3.265 0 01-1.486-.41v.042A3.276 3.276 0 003.276 9.28a3.296 3.296 0 01-1.482.056A3.285 3.285 0 004.86 11.61a6.598 6.598 0 01-4.077 1.4c-.265 0-.526-.014-.783-.045a9.312 9.312 0 005.032 1.47"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default TwitterIcon
/* prettier-ignore-end */
