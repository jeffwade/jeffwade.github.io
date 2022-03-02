import * as React from "react"
import { useState } from 'react';

import { ModeContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"

import { PlasmicHomepage } from "../components/plasmic/jeffdo_es/PlasmicHomepage"

function Homepage() {
  const [mode, setMode] = useState([]);
  const [showLabel, setShowLabel] = useState(true);
  const [highlight, setHighlight] = useState({about: false, work: false});

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
        setHighlight({about: !highlight.about, work: highlight.work});
        break;
      case "work":
        setHighlight({about: highlight.about, work: !highlight.work});
        break;
      default:
        setHighlight({about: false, work: false});
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
        <PlasmicHomepage 
          first={{
            onClick: () => toggleHighlight("about"),
          }}
          end={{
            onClick: () => toggleHighlight("work"),
          }}

          reveal={{
            onClick: () => toggleReveal(),
          }}
          darkmode={{
            onClick: () => toggleDarkMode(),
          }}

          likeness={{
            labelIsVisible: showLabel,
            highlighted: highlight.about,
          }}
          words={{
            labelIsVisible: showLabel,
            highlighted: highlight.about,
          }}
          pwc={{
            labelIsVisible: showLabel,
            highlighted: highlight.work,
          }}
          orglab={{
            labelIsVisible: showLabel,
            highlighted: highlight.work,
          }}
          learnin={{
            labelIsVisible: showLabel,
            highlighted: highlight.about,
          }}
          workshops={{
            labelIsVisible: showLabel,
            highlighted: highlight.work,
          }}
          tracks={{
            labelIsVisible: showLabel,
            highlighted: highlight.about,
          }}
        />
    </ModeContext.Provider>
  )
}

export default Homepage
