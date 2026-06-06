// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function LearnaxIcon(props) {
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
          "M2.275 2.364A1 1 0 001 3.326v8.92a1 1 0 00.725.961L8 15l6.275-1.793a1 1 0 00.725-.961v-8.92a1 1 0 00-1.275-.962L8 4 2.275 2.364zm11.24 3.757a.5.5 0 10-.243-.97l-3.03.758a.5.5 0 00.243.97l3.03-.758zm-.97 2.2a.5.5 0 10-.243-.97l-2.06.515a.5.5 0 00.243.97l2.06-.515zm.97 1.558a.5.5 0 10-.243-.97l-3.03.757a.5.5 0 00.243.97l3.03-.757zm-10.5.485c.067-.268.606-.364.606-.364l2.06.515a.5.5 0 01-.242.97l-2.06-.515a.5.5 0 01-.364-.606zM2 5.698c.025.583.645 1.724 1.787 1.674-.037-.875.188-.903.188-.903.06-.031 1.694 1.504 1.936 1.813.1.13.15.262.193.378.06.162.108.29.266.332.27.073.845-.392.546-.608-.3-.216-2.416-2.144-2.531-2.371l.199-.315L3.912 5c-.42.568-1.26.669-1.912.698z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default LearnaxIcon
/* prettier-ignore-end */
