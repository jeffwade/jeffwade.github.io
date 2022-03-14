// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mujoL4gD3qd1ezKDLZ31rZ
// Component: lqv31eB-tK
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
import { useScreenVariants as useScreenVariantsekypzdksLjd0F } from "./PlasmicGlobalVariant__Screen" // plasmic-import: EKYPZDKSLjd0F/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_jeffdo_es.module.css" // plasmic-import: mujoL4gD3qd1ezKDLZ31rZ/projectcss
import * as sty from "./PlasmicTag.module.css" // plasmic-import: lqv31eB-tK/css

export const PlasmicTag__VariantProps = new Array("stroke", "flippabble")

export const PlasmicTag__ArgProps = new Array("label")

function PlasmicTag__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const globalVariants = ensureGlobalVariants({
    mode: useMode(),
    screen: useScreenVariantsekypzdksLjd0F(),
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
        {
          [projectcss.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),

          [sty.rootflippabble]: hasVariant(
            variants,
            "flippabble",
            "flippabble"
          ),

          [sty.rootstroke]: hasVariant(variants, "stroke", "stroke"),
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7ZTu
            )}
          >
            {"label"}
          </div>
        ),

        value: args.label,
        className: classNames(sty.slotTargetLabel, {
          [sty.slotTargetLabelflippabble]: hasVariant(
            variants,
            "flippabble",
            "flippabble"
          ),
        }),
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
      internalArgPropNames: PlasmicTag__ArgProps,
      internalVariantPropNames: PlasmicTag__VariantProps,
    })

    return PlasmicTag__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicTag"
  } else {
    func.displayName = `PlasmicTag.${nodeName}`
  }
  return func
}

export const PlasmicTag = Object.assign(
  // Top-level PlasmicTag renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTag
    internalVariantProps: PlasmicTag__VariantProps,
    internalArgProps: PlasmicTag__ArgProps,
  }
)

export default PlasmicTag
/* prettier-ignore-end */
