import * as React from "react"
import { useState } from "react"

import { ModeContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"
import { HighlightContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Highlight"
import { ArrangementContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Arrangement"

import { PlasmicHomepage } from "../components/plasmic/jeffdo_es/PlasmicHomepage"

function Homepage() {
  const [mode, setMode] = useState(["dark"])
  const [revealed, setRevealed] = useState(false)
  const [prevRevealed, setPrevRevealed] = useState(revealed)
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

  const toggleHighlight = cat => {
    let hl = highlight
    const newMode = [...mode]

    if (hl === cat) {
      setHighlight(undefined)
      if (prevRevealed && !newMode.includes("reveal")) {
        newMode.push("reveal")
      } else if (!prevRevealed && newMode.includes("reveal")) {
        newMode.pop()
      }
      setRevealed(prevRevealed)

    } else {
      setPrevRevealed(revealed)
      switch (cat) {
        case "about":
          setHighlight("about")
          if (!mode.includes("reveal")) {
            newMode.push("reveal")
            setRevealed(true)
          }
          break
        case "work":
          setHighlight("work")
          if (!mode.includes("reveal")) {
            newMode.push("reveal")
            setRevealed(true)
          }
          break
        default:
          setHighlight(undefined)
      }
    }
    setMode(newMode)
  }

  const toggleRevealed = () => {
    const newMode = [...mode]
    if (newMode.includes("reveal")) {
      newMode.pop()
      setRevealed(false)
      setPrevRevealed(false)
    } else {
      newMode.push("reveal")
      setRevealed(true)
      setPrevRevealed(true)
    }
    setMode(newMode)
  }

  return (
    <ModeContext.Provider value={mode}>
      <HighlightContext.Provider value={highlight}>
        <ArrangementContext.Provider value={undefined}>
          <PlasmicHomepage
            // onClick={( highlight !== undefined ) && ( () => toggleHighlight() )}
            jeff={{
              onClick: () => toggleHighlight("about"),
            }}
            design={{
              onClick: () => toggleHighlight("work"),
            }}
            reveal={{
              onClick: () => toggleRevealed(),
            }}
            darkmode={{
              onClick: () => toggleDarkMode(),
            }}
            likeness={{
              labelIsVisible: revealed,
            }}
            words={{
              labelIsVisible: revealed,

            }}
            ui={{
              labelIsVisible: revealed,
              href: "/remember",
            }}
            ux={{
              labelIsVisible: revealed,
              href: "/remember",
            }}
            learnin={{
              labelIsVisible: revealed,
            }}
            service={{
              labelIsVisible: revealed,
              href: "/remember",
            }}
            tracks={{
              labelIsVisible: revealed,
            }}
          />
        </ArrangementContext.Provider>
      </HighlightContext.Provider>
    </ModeContext.Provider>
  )
}

export default Homepage
