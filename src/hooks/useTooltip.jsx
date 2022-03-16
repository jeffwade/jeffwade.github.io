import * as React from "react"
import { useEffect, useState } from "react"
import useMousePosition from "../hooks/useMousePosition"
import Tooltip from "../components/Tooltip"

const useTooltip = (bg, label, content, minW, maxW, followMouse) => {
  const mousePosition = useMousePosition()
  const [mobile, setMobile] = useState(undefined)
  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    window.addEventListener("mousemove", () => setMobile(mediaQuery.matches), {
      once: true,
    })
    mediaQuery.addEventListener("change", e => setMobile(e.matches))
  }, [])

  let tooltipStyles = {
    position: "fixed",
    zIndex: 100,
    minWidth: minW,
    maxWidth: maxW,
    borderRadius: 4,
  }

  if (isBrowser) {
    if (mousePosition.y > window.innerHeight / 2) {
      tooltipStyles["top"] = "auto"
      tooltipStyles["bottom"] = window.innerHeight - mousePosition.y + 40
    } else {
      tooltipStyles["top"] = mousePosition.y + 40
      tooltipStyles["bottom"] = "auto"
    }

    if (!mobile || (mobile && followMouse)) {
      if (mousePosition.x > window.innerWidth / 2) {
        tooltipStyles["left"] = "auto"
        tooltipStyles["right"] = window.innerWidth - mousePosition.x
      } else {
        tooltipStyles["left"] = mousePosition.x
        tooltipStyles["right"] = "auto"
      }
    } else {
      tooltipStyles["maxWidth"] = "80vw"
      tooltipStyles["left"] = "auto"
      tooltipStyles["right"] = "auto"
    }
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

  return (
    <Tooltip content={preview} bg={bg} style={tooltipStyles} />
  )
}

export default useTooltip
