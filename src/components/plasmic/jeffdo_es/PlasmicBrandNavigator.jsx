// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mujoL4gD3qd1ezKDLZ31rZ
// Component: 9qnpA1HN2m
import * as React from "react"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_jeffdo_es.module.css" // plasmic-import: mujoL4gD3qd1ezKDLZ31rZ/projectcss
import * as sty from "./PlasmicBrandNavigator.module.css" // plasmic-import: 9qnpA1HN2m/css

export const PlasmicBrandNavigator__VariantProps = new Array()

export const PlasmicBrandNavigator__ArgProps = new Array()

function PlasmicBrandNavigator__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {
              "helping global brand leaders discover, manage and implement brand assets consistently"
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBrandNavigator__ArgProps,
      internalVariantPropNames: PlasmicBrandNavigator__VariantProps,
    })

    return PlasmicBrandNavigator__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicBrandNavigator"
  } else {
    func.displayName = `PlasmicBrandNavigator.${nodeName}`
  }
  return func
}

export const PlasmicBrandNavigator = Object.assign(
  // Top-level PlasmicBrandNavigator renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicBrandNavigator
    internalVariantProps: PlasmicBrandNavigator__VariantProps,
    internalArgProps: PlasmicBrandNavigator__ArgProps,
  }
)

export default PlasmicBrandNavigator
/* prettier-ignore-end */
