import * as React from "react"
import { useEffect, useState } from "react"
import { PlasmicStripe } from "./plasmic/jeffdo_es/PlasmicStripe"
import useTooltip from "../hooks/useTooltip"
import useMousePosition from "../hooks/useMousePosition"
import Preview from "../components/Preview"
import ArrowRightIcon from "../components/plasmic/jeffdo_es/icons/PlasmicIcon__ArrowRight"

function Stripe_(props, ref) {
  const {
    name,
    label,
    icon,
    category,
    color,
    mode,
    highlighted,
    lowlighted,
    revealed,
    labelIsVisible,
    ...rest
  } = props
  const [isHovered, setIsHovered] = useState(false)
  const isBrowser = typeof window !== "undefined"
  const mousePosition = useMousePosition()
  const [mobile, setMobile] = useState(undefined)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    window.addEventListener("mousemove", () => setMobile(mediaQuery.matches), {
      once: true,
    })
    mediaQuery.addEventListener("change", e => setMobile(e.matches))
  }, [])

  const labelStyles = {
    position: "absolute",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    overflow: "hidden",
    whiteSpace: "nowrap",
  }

  if (isBrowser) {
    if (!mobile && isHovered) {
      if (mousePosition.x > window.innerWidth / 2) {
        labelStyles["left"] = "auto"
        labelStyles["right"] = window.innerWidth - mousePosition.x - 24
        labelStyles["flexDirection"] = "row-reverse"
      } else {
        labelStyles["left"] = mousePosition.x - 24
        labelStyles["right"] = "auto"
        labelStyles["flexDirection"] = "row"
      }
    } else {
      labelStyles["left"] = "calc(50vw - 200px)"
      labelStyles["right"] = "auto"
    }
  }

  let stripeLabel = null
  if (category === "work" && isHovered) {
    stripeLabel = (
      <div style={labelStyles}>
         {lowlighted ? "work" : "see work samples"}
        <ArrowRightIcon />
      </div>
    )
    labelStyles["left"] = lowlighted ? "auto" : mousePosition.x - 24
  } else if (!lowlighted && labelIsVisible) {
    stripeLabel = (
      <div style={labelStyles}>
        {icon}
        {label}
      </div>
    )
  } else {
    stripeLabel = null
  }

  const tooltipLabel =
    category === "work" || !labelIsVisible || lowlighted ? [icon, label, icon] : null
  const content = <Preview name={name} />
  const tooltip = useTooltip(
    color,
    tooltipLabel,
    content,
    "334",
    "480px",
    false
  )

  return (
    <>
      {isHovered && tooltip}
      <PlasmicStripe
        root={{ ref }}
        name={name}
        color={color}
        icon={null}
        category={category}
        mode={mode}
        highlighted={highlighted}
        lowlighted={lowlighted}
        {...rest}
        label={stripeLabel}
        onMouseOver={() => setIsHovered(true)}
        onFocus={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onBlur={() => setIsHovered(false)}
      />
    </>
  )
}

const Stripe = React.forwardRef(Stripe_)

export default Stripe
