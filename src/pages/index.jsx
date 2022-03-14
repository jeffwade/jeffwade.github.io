import * as React from "react"
import { useState } from "react"

import { ModeContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"
import { HighlightContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Highlight"
import { ArrangementContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Arrangement"

import { PlasmicHomepage } from "../components/plasmic/jeffdo_es/PlasmicHomepage"

function Homepage() {
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

  const toggleHighlight = cat => {
    let hl = highlight
    const newMode = [...mode]

    if (hl === cat) {
      setHighlight(undefined)
      if (prevReveal && !newMode.includes("reveal")) {
        newMode.push("reveal")
      } else if (!prevReveal && newMode.includes("reveal")) {
        newMode.pop()
      }
      setReveal(prevReveal)

    } else {
      setPrevReveal(reveal)
      switch (cat) {
        case "about":
          setHighlight("about")
          if (!mode.includes("reveal")) {
            newMode.push("reveal")
            setReveal(true)
          }
          break
        case "work":
          setHighlight("work")
          if (!mode.includes("reveal")) {
            newMode.push("reveal")
            setReveal(true)
          }
          break
        default:
          setHighlight(undefined)
      }
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
    <ModeContext.Provider value={mode}>
      <HighlightContext.Provider value={highlight}>
        <ArrangementContext.Provider value={undefined}>
          <PlasmicHomepage
            // onClick={( highlight !== undefined ) && ( () => toggleHighlight() )}
            jeff={{
              onClick: () => toggleHighlight("about"),
              label: highlight === "about" ? "* reset" : "* about jeff",
            }}
            design={{
              onClick: () => toggleHighlight("work"),
              label: highlight === "work" ? "* reset" : "† product design",
            }}
            reveal={{
              onClick: () => toggleReveal(),
            }}
            darkmode={{
              onClick: () => toggleDarkMode(),
            }}
            likeness={{
              labelIsVisible: reveal,
            }}
            words={{
              labelIsVisible: reveal,
            }}
            ui={{
              labelIsVisible: reveal,
            }}
            ux={{
              labelIsVisible: reveal,
            }}
            learnin={{
              labelIsVisible: reveal,
            }}
            service={{
              labelIsVisible: reveal,
            }}
            tracks={{
              labelIsVisible: reveal,
            }}
          />
        </ArrangementContext.Provider>
      </HighlightContext.Provider>
    </ModeContext.Provider>
  )
}

export default Homepage
