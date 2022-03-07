// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react"

export const ArrangementContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
)

export function useArrangement() {
  return React.useContext(ArrangementContext)
}

export default ArrangementContext
/* prettier-ignore-end */
