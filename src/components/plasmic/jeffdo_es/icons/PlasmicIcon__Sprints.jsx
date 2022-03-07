// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function SprintsIcon(props) {
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
          "M12.214 2.857a1.857 1.857 0 11-3.714 0 1.857 1.857 0 013.714 0zm.929 0A2.786 2.786 0 117.73 1.93H2v3.495a2.786 2.786 0 014.639 2.233c-.29-.102-.6-.157-.925-.157a1.857 1.857 0 10-2.572 1.714 2.772 2.772 0 00-.21.915A2.783 2.783 0 012 9.576V14h6.158c2.663 0 4.985-.516 6.842-1.857-.763-3.434-.734-5.7-.7-8.39.008-.582.016-1.185.016-1.824h-1.332c.103.29.159.603.159.928zm-7.429 9.286a1.857 1.857 0 100-3.714 1.857 1.857 0 000 3.714z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default SprintsIcon
/* prettier-ignore-end */
