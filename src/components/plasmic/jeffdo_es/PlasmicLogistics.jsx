// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mujoL4gD3qd1ezKDLZ31rZ
// Component: tpGGTqAMcV
import * as React from "react"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_jeffdo_es.module.css" // plasmic-import: mujoL4gD3qd1ezKDLZ31rZ/projectcss
import * as sty from "./PlasmicLogistics.module.css" // plasmic-import: tpGGTqAMcV/css

export const PlasmicLogistics__VariantProps = new Array()

export const PlasmicLogistics__ArgProps = new Array()

function PlasmicLogistics__RenderFunc(props) {
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
        />
      </div>
    </React.Fragment>
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
      internalArgPropNames: PlasmicLogistics__ArgProps,
      internalVariantPropNames: PlasmicLogistics__VariantProps,
    })

    return PlasmicLogistics__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicLogistics"
  } else {
    func.displayName = `PlasmicLogistics.${nodeName}`
  }
  return func
}

export const PlasmicLogistics = Object.assign(
  // Top-level PlasmicLogistics renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLogistics
    internalVariantProps: PlasmicLogistics__VariantProps,
    internalArgProps: PlasmicLogistics__ArgProps,
  }
)

export default PlasmicLogistics
/* prettier-ignore-end */
