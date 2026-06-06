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
    href,
    label,
    icon,
    category,
    color,
    mode,
    highlighted,
    lowlighted,
    labelIsVisible,
    ...rest
  } = props
  const [isHovered, setIsHovered] = useState(false)
  const isBrowser = typeof window !== "undefined"
  const mousePosition = useMousePosition()
  const [mobile, setMobile] = useState(undefined)

  const words = [
    "my name is jeff wade. i'm currently a design lead at bridger, in san diego, california.",
    "i'm a fan of thinking through complex systems and mapping them to intuitive representations; shaping experiences that make sense.",
    "i believe that form follows function follows form: the way something works should inform how it looks, which will influence how it's used.",
    "my job is to guide the design process in a positive way, through facilitation, mentorship and rolling up my sleeves and diving in",
    "working with global enterprises, local startups and many clients in between, i've designed digital products, crafted brand experiences and facilitated innovation workshops.",
    "learning is my love language",
    "i believe the primary rules of design (and life) are: relationships, relationships, relationships.",
    "i sleep with my sketchbook next to my bed."
  ];
  const [currentWords, setCurrentWords] = useState(0);

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
    opacity: 100,
  }

  // set the position of the striipe label based on the mouse position
  //  
  if (isBrowser) {
    if (!mobile) {
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
  } else if ( name === "words" && isHovered ) {
    stripeLabel = (
      <div style={labelStyles}>
         {lowlighted ? null : "more words"}
        <ArrowRightIcon />
      </div>
    )
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

  let tooltipLabel =
    category === "work" || !labelIsVisible || lowlighted ? [label, icon] : null

  tooltipLabel = name === "words" ? [icon, label, `(${currentWords + 1}/${words.length})`] : tooltipLabel;
  const content = (name==="words") ? <Preview name="words" words={words[currentWords]}/> : <Preview name={name} />
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
        {...rest}
        root={{
          ref,
          as: href ? "a" : undefined,
        }}
        href={href}
        name={name}
        color={color}
        icon={null}
        category={category}
        mode={mode}
        highlighted={highlighted}
        lowlighted={lowlighted}
        label={stripeLabel}
        onClick={() => {
          setCurrentWords((currentWords + 1)%words.length);
        }}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onFocus={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onBlur={() => setIsHovered(false)}
      />
    </>
  )
}

const Stripe = React.forwardRef(Stripe_)

export default Stripe
