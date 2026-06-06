// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react"

export const HighlightContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
)

export function useHighlight() {
  return React.useContext(HighlightContext)
}

export default HighlightContext
/* prettier-ignore-end */
