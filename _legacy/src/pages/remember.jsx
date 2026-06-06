import * as React from "react"
import { useState } from 'react';
import { ModeContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"
import { HighlightContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Highlight"
import { ArrangementContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Arrangement"
import { PlasmicRemember } from "../components/plasmic/jeffdo_es/PlasmicRemember"

function Remember() {
  const [mode, setMode] = useState(["dark"])
  const [hidden, setHidden] = useState(false)

  const toggleRevealed = () => {
    const newMode = [...mode]
    if (newMode.includes("reveal")) {
      newMode.pop()
      setHidden(false)
    } else {
      newMode.push("reveal")
      setHidden(true)
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
    <ArrangementContext.Provider value={hidden}>
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
              hoverText: hidden ? "coming soon" : <>robust organizational structure-mapping and transformation planning for enterprise clients</>,
              href: "/remember/an-org-design-tool",
            }}
          />
        </ModeContext.Provider>
      </HighlightContext.Provider>
    </ArrangementContext.Provider>
  )
}

export default Remember
