// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function ArrowDownIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
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
          "M7.75 13.25h-.5.5zm0 2.5l-.354.354a.5.5 0 00.708 0l-.354-.354zM9.25.25c0 .659-.163 1.13-.394 1.502-.237.382-.56.684-.926.989-.345.287-.774.61-1.09.98-.34.397-.59.883-.59 1.529h1c0-.354.125-.618.348-.878.246-.286.567-.525.972-.863.384-.32.81-.706 1.136-1.23.332-.534.544-1.188.544-2.029h-1zm-3 5c0 .339.086.638.253.894.163.25.386.433.62.57.45.261 1.027.401 1.506.521.52.13.943.24 1.244.416.141.082.23.166.286.25a.61.61 0 01.091.349h1c0-.339-.086-.638-.253-.894a1.813 1.813 0 00-.62-.57c-.45-.261-1.027-.401-1.506-.521-.52-.13-.943-.24-1.244-.416a.823.823 0 01-.286-.25.61.61 0 01-.091-.349h-1zm4 3c0 .366-.135.705-.38 1.06-.25.362-.591.704-.974 1.086-.367.368-.777.775-1.088 1.226-.318.458-.558.994-.558 1.628h1c0-.366.135-.705.38-1.06.25-.361.591-.704.974-1.086.367-.368.777-.775 1.088-1.226.318-.458.558-.994.558-1.628h-1zm-3 5v2.5h1v-2.5h-1zm.854 2.854l3-3-.708-.708-3 3 .708.708zm0-.708l-3-3-.708.708 3 3 .708-.708z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default ArrowDownIcon
/* prettier-ignore-end */
