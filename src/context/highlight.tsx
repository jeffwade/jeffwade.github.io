import { createContext, useContext } from "react";

export const HighlightContext = createContext<string | undefined>(undefined);

export function useHighlight() {
  return useContext(HighlightContext);
}
