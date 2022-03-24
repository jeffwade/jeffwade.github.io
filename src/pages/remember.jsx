import * as React from "react"
import { useState } from 'react';
import { ModeContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"
import { HighlightContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Highlight"
import { ArrangementContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Arrangement"
import { PlasmicRemember } from "../components/plasmic/jeffdo_es/PlasmicRemember"

function Remember() {
  const [mode, setMode] = useState(["dark"])
  const [revealed, setRevealed] = useState(false)

  const toggleRevealed = () => {
    const newMode = [...mode]
    if (newMode.includes("reveal")) {
      newMode.pop()
      setRevealed(false)
    } else {
      newMode.push("reveal")
      setRevealed(true)
    }
    setMode(newMode)
  }

  const toggleDarkMode = () => {
    const newMode = [...mode]
    if (newMode.includes("dark")) {
      newMode.shift()
    } else {
      newMode.unshift("dark")
    }
    setMode(newMode)
  }


  return (
    <ArrangementContext.Provider value={revealed}>
      <HighlightContext.Provider value={undefined}>
        <ModeContext.Provider value={mode}>
          <PlasmicRemember
            reveal={{
              onClick: () => toggleRevealed(),
            }}
            darkmode={{
              onClick: () => toggleDarkMode(),
            }}
            case1={{
              hoverText: "robust organizational design tool for enterprise clients.",
              href: "/an-org-design-tool",
            }}
          />
        </ModeContext.Provider>
      </HighlightContext.Provider>
    </ArrangementContext.Provider>
  )
}

export default Remember
