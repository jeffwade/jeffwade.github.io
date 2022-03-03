import * as React from "react"
import { useState } from 'react';

import { ModeContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"
import { HighlightContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Highlight"

import { PlasmicHomepage } from "../components/plasmic/jeffdo_es/PlasmicHomepage"

function Homepage() {
  const [mode, setMode] = useState([]);
  const [showLabel, setShowLabel] = useState(true);
  const [highlight, setHighlight] = useState(undefined);

  const toggleDarkMode = () => {
    const newMode = [...mode];
    if ( newMode.includes("dark") ) {
      newMode.shift();
    } else {
       newMode.unshift("dark");
    }
    setMode(newMode);
  };

  const toggleHighlight = (cat) => {
    switch (cat) {
      case "about":
        setHighlight("about");
        break;
      case "work":
        setHighlight("work");
        break;
      default:
        setHighlight(undefined);
    }
  };

  const toggleReveal = () => {
    const newMode = [...mode];
    if ( newMode.includes("reveal") ) {
      newMode.pop();
      setShowLabel(true);
    } else {
      newMode.push("reveal");
      setShowLabel(false);
    }
    setMode(newMode);
  };

  return (
    <ModeContext.Provider value={mode}>
      <HighlightContext.Provider value={highlight}>
        <PlasmicHomepage 
          jeff={{
            onFocus: () => toggleHighlight("about"),
            onBlur: () => toggleHighlight(),
          }}
          design={{
            onFocus: () => toggleHighlight("work"),
            onBlur: () => toggleHighlight(),
          }}

          reveal={{
            onClick: () => toggleReveal(),
          }}
          darkmode={{
            onClick: () => toggleDarkMode(),
          }}

          likeness={{
            labelIsVisible: showLabel,
          }}
          words={{
            labelIsVisible: showLabel,
          }}
          pwc={{
            labelIsVisible: showLabel,
          }}
          orglab={{
            labelIsVisible: showLabel,
          }}
          learnin={{
            labelIsVisible: showLabel,
          }}
          sprints={{
            labelIsVisible: showLabel,
          }}
          tracks={{
            labelIsVisible: showLabel,
          }}
        />
      </HighlightContext.Provider>
    </ModeContext.Provider>
  )
}

export default Homepage
