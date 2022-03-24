// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mujoL4gD3qd1ezKDLZ31rZ
// Component: 9yKLngp1XNu
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as pp from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_jeffdo_es.module.css" // plasmic-import: mujoL4gD3qd1ezKDLZ31rZ/projectcss
import * as sty from "./PlasmicButton.module.css" // plasmic-import: 9yKLngp1XNu/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg" // plasmic-import: 9deESLzdtBn/icon
import IconIcon from "./icons/PlasmicIcon__Icon" // plasmic-import: ykJmUC__Ykl/icon

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
)

export const PlasmicButton__ArgProps = new Array(
  "children",
  "startIcon",
  "endIcon",
  "link"
)

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    })

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  }

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
          [sty.rootcolor_haze]: hasVariant(variants, "color", "haze"),
          [sty.rootcolor_link]: hasVariant(variants, "color", "link"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.rootshape_round]: hasVariant(variants, "shape", "round"),
          [sty.rootshape_round_size_compact]:
            hasVariant(variants, "shape", "round") &&
            hasVariant(variants, "size", "compact"),
          [sty.rootshape_rounded]: hasVariant(variants, "shape", "rounded"),
          [sty.rootshape_sharp]: hasVariant(variants, "shape", "sharp"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.rootshowEndIcon_shape_rounded]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),

          [sty.rootshowStartIcon_shape_rounded]:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.rootshowStartIcon_size_compact]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          [sty.rootshowStartIcon_size_compact_showEndIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootsize_compact]: hasVariant(variants, "size", "compact"),
          [sty.rootsize_compact_shape_rounded]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          [sty.rootsize_compact_showEndIcon]:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          [sty.rootsize_minimal]: hasVariant(variants, "size", "minimal"),
          [sty.rootsize_minimal_color_link]:
            hasVariant(variants, "color", "link") &&
            hasVariant(variants, "size", "minimal"),
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainershowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.startIconContainershowStartIcon_shape_rounded]:
              hasVariant(variants, "shape", "rounded") &&
              hasVariant(variants, "showStartIcon", "showStartIcon"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__ungP)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),

              [sty.slotTargetStartIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              ),
            }),
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainerisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.contentContainershape_rounded]: hasVariant(
            variants,
            "shape",
            "rounded"
          ),

          [sty.contentContainershowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetChildrencolor_clear]: hasVariant(
              variants,
              "color",
              "clear"
            ),

            [sty.slotTargetChildrencolor_haze]: hasVariant(
              variants,
              "color",
              "haze"
            ),

            [sty.slotTargetChildrencolor_link]: hasVariant(
              variants,
              "color",
              "link"
            ),

            [sty.slotTargetChildrenisDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.slotTargetChildrenshape_rounded]: hasVariant(
              variants,
              "shape",
              "rounded"
            ),

            [sty.slotTargetChildrenshowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),

            [sty.slotTargetChildrenshowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.slotTargetChildrensize_minimal]: hasVariant(
              variants,
              "size",
              "minimal"
            ),

            [sty.slotTargetChildrensize_minimal_color_link]:
              hasVariant(variants, "color", "link") &&
              hasVariant(variants, "size", "minimal"),
          }),
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainershowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___36Cfc)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),

              [sty.slotTargetEndIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),
            }),
          })}
        </div>
      ) : null}
    </p.Stack>
  )
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon",
      },

      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
    },

    ref
  )

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink
    b.plasmicProps.overrides.root.props.component = Link
    b.plasmicProps.overrides.root.props.platform = "gatsby"
  }
  return b
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps,
    })

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicButton"
  } else {
    func.displayName = `PlasmicButton.${nodeName}`
  }
  return func
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior,
  }
)

export default PlasmicButton
/* prettier-ignore-end */
