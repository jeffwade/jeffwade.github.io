import * as React from "react"
import { useEffect, useState } from "react"
import useMousePosition from "../hooks/useMousePosition"
import Tooltip from "../components/Tooltip"

const useTooltip = (bg, label, content, minW, maxW, followMouse) => {
  const mousePosition = useMousePosition()

  const mediaQuery = window.matchMedia("(max-width: 768px)")
  const [mobile, setMobile] = useState(mediaQuery.matches)
  useEffect(() => {
    mediaQuery.addEventListener("change", e => setMobile(e.matches))
  }, [])

  let tooltipStyles = {
    position: "fixed",
    zIndex: 100,
    minWidth: minW,
    maxWidth: maxW,
    borderRadius: 4,
  }

  if (mousePosition.y > window.innerHeight / 2) {
    tooltipStyles["top"] = "auto"
    tooltipStyles["bottom"] = window.innerHeight - mousePosition.y + 15
  } else {
    tooltipStyles["top"] = mousePosition.y + 15
    tooltipStyles["bottom"] = "auto"
  }

  if (!mobile || (mobile && followMouse)) {
    if (mousePosition.x > window.innerWidth / 2) {
      tooltipStyles["left"] = "auto"
      tooltipStyles["right"] = window.innerWidth - mousePosition.x + 15
    } else {
      tooltipStyles["left"] = mousePosition.x + 15
      tooltipStyles["right"] = "auto"
    }
  } else {
    tooltipStyles["maxWidth"] = "80vw";
    tooltipStyles["left"] = "auto";
    tooltipStyles["rigth"] = "auto";
  }

  const previewLabel = label ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {label}
    </div>
  ) : null

  const previewContent = content ? <div>{content}</div> : null

  const preview = [previewLabel, previewContent]

  return <Tooltip mobile={mobile} content={preview} bg={bg} style={tooltipStyles} />
}

export default useTooltip
