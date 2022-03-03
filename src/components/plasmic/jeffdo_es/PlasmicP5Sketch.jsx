// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mujoL4gD3qd1ezKDLZ31rZ
// Component: ZbI4Qm1ePM
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import { useMode } from "./PlasmicGlobalVariant__Mode" // plasmic-import: zulsK3o-3W/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_jeffdo_es.module.css" // plasmic-import: mujoL4gD3qd1ezKDLZ31rZ/projectcss
import * as sty from "./PlasmicP5Sketch.module.css" // plasmic-import: ZbI4Qm1ePM/css
import image8HsCguIpl from "./images/image.png" // plasmic-import: 8HSCguIpl/picture

export const PlasmicP5Sketch__VariantProps = new Array()

export const PlasmicP5Sketch__ArgProps = new Array("sketch", "sketchDiv")

function PlasmicP5Sketch__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const globalVariants = ensureGlobalVariants({
    mode: useMode(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        "sketch-canvas",
        {
          [projectcss.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__n3Soy)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: image8HsCguIpl,
              fullWidth: 1711,
              fullHeight: 1711,
              aspectRatio: undefined,
            }}
          />
        ),

        value: args.sketchDiv,
      })}
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicP5Sketch__ArgProps,
      internalVariantPropNames: PlasmicP5Sketch__VariantProps,
    })

    return PlasmicP5Sketch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicP5Sketch"
  } else {
    func.displayName = `PlasmicP5Sketch.${nodeName}`
  }
  return func
}

export const PlasmicP5Sketch = Object.assign(
  // Top-level PlasmicP5Sketch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicP5Sketch
    internalVariantProps: PlasmicP5Sketch__VariantProps,
    internalArgProps: PlasmicP5Sketch__ArgProps,
  }
)

export default PlasmicP5Sketch
/* prettier-ignore-end */
