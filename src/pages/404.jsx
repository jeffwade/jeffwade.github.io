import * as React from "react"
import { useState } from "react"
import { ModeContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Mode"
import { HighlightContext } from "../components/plasmic/jeffdo_es/PlasmicGlobalVariant__Highlight"
import { Plasmic_404 } from "../components/plasmic/jeffdo_es/Plasmic_404"
import sketch from '../sketches/mandigidala';

function _404() {
  const [mode, setMode] = useState(["dark"]);

  const toggleReveal = () => {
    const newMode = [...mode];
    if ( newMode.includes("reveal") ) {
      newMode.pop();
      // setShowLabel(true);
    } else {
      newMode.push("reveal");
      // setShowLabel(false);
    }
    setMode(newMode);
  };

  const toggleDarkMode = () => {
    const newMode = [...mode];
    if ( newMode.includes("dark") ) {
      newMode.shift();
    } else {
       newMode.unshift("dark");
    }
    setMode(newMode);
  };

  return (
    <HighlightContext.Provider value={undefined}>
      <ModeContext.Provider value={mode}>
        <Plasmic_404
          p5Sketch={{
            props: {
              sketch: sketch,
            }
          }}

          reveal={{
            onClick: () => toggleReveal(),
          }}
          darkmode={{
            onClick: () => toggleDarkMode(),
          }}
        />
      </ModeContext.Provider>
    </HighlightContext.Provider>
  )
}

export default _404
