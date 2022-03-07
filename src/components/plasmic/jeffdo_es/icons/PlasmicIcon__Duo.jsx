// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function DuoIcon(props) {
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
          "M3.625 7.39a.744.744 0 01-.8.737v.97c0 .623.517 1.131 1.15 1.131.632 0 1.148-.508 1.148-1.132V7.85c0-.623-.516-1.132-1.148-1.132-.208 0-.402.055-.57.15a.73.73 0 01.22.523zm7.946 0a.744.744 0 01-.799.737v.97c0 .623.516 1.131 1.149 1.131s1.149-.508 1.149-1.132V7.85c0-.623-.516-1.132-1.15-1.132-.206 0-.4.055-.569.15a.73.73 0 01.22.523z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.279 5.293L3.763 2.6c-.15-.148-.333-.132-.45.049-.26.452-.353.967-.284 1.466l-.748-.826c-.15-.148-.4-.132-.5.065-.253.428-.354.91-.308 1.383A3.462 3.462 0 000 7.57v1.821c0 1.903 1.565 3.462 3.513 3.462h.1a3.521 3.521 0 003.152-1.931l-.405-.07c-.05 0-.067-.017-.067-.066v-.066c.15-.754.883-1.312 1.749-1.312.815 0 1.531.574 1.681 1.312v.066c0 .05-.016.082-.066.066l-.402.069a3.517 3.517 0 003.149 1.932h.083C14.418 12.853 16 11.31 16 9.39V7.554a3.445 3.445 0 00-1.457-2.807 2.268 2.268 0 00-.308-1.393c-.083-.197-.333-.213-.483-.065l-.75.822a2.269 2.269 0 00-.299-1.462.3.3 0 00-.482-.05l-2.142 2.337a3.478 3.478 0 00-.289.276c-1.019.842-2.54.869-3.511.081zm-.135 2.458c0-1.329-1.1-2.412-2.448-2.412-1.348 0-2.447 1.083-2.447 2.412v1.46c0 1.329 1.099 2.412 2.447 2.412 1.349 0 2.448-1.083 2.448-2.412v-1.46zm6.16-2.412c1.348 0 2.447 1.083 2.447 2.412v1.46c0 1.329-1.099 2.412-2.447 2.412-1.349 0-2.448-1.083-2.448-2.412v-1.46c0-1.329 1.1-2.412 2.448-2.412z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.032 9.408zM6.9 10.925v.098a1.125 1.125 0 002.25 0v-.103l-1.11.192h-.06l-1.08-.187z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default DuoIcon
/* prettier-ignore-end */
