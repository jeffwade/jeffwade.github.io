import * as React from "react"
import { useState } from "react"
import { ModeContext } from "../../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"
import { HighlightContext } from "../../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Highlight"
import { ArrangementContext } from "../../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Arrangement"
import { PlasmicOrgTool } from "../../components/plasmic/jeffdo_es/PlasmicOrgTool"

function OrgTool() {
  const [mode, setMode] = useState(["dark"])
  const [reveal, setReveal] = useState(true)
  const [prevReveal, setPrevReveal] = useState(reveal)
  const [highlight, setHighlight] = useState(undefined)

  const toggleDarkMode = () => {
    const newMode = [...mode]
    if (newMode.includes("dark")) {
      newMode.shift()
    } else {
      newMode.unshift("dark")
    }
    setMode(newMode)
  }

  const toggleReveal = () => {
    const newMode = [...mode]
    if (newMode.includes("reveal")) {
      newMode.pop()
      setReveal(false)
      setPrevReveal(false)
    } else {
      newMode.push("reveal")
      setReveal(true)
      setPrevReveal(true)
    }
    setMode(newMode)
  }


  return (
    <ArrangementContext.Provider value={undefined}>
      <HighlightContext.Provider value={undefined}>
        <ModeContext.Provider value={mode}>
          <PlasmicOrgTool
            darkmode={{
              onClick: () => toggleDarkMode(),
            }}
            reveal={{
              onClick: () => toggleReveal(),
            }}
          />
        </ModeContext.Provider>
      </HighlightContext.Provider>
    </ArrangementContext.Provider>
  )
}

export default OrgTool
