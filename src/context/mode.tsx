import { createContext, useContext } from "react";

type Mode = string[];

export const ModeContext = createContext<Mode>(["dark"]);

export function useMode() {
  return useContext(ModeContext);
}
