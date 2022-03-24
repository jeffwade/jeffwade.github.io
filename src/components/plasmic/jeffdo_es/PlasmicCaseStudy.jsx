// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mujoL4gD3qd1ezKDLZ31rZ
// Component: SiSovdu-fA
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import BackButton from "../../BackButton" // plasmic-import: 6NgyzpZAz-/component
import Tag from "../../Tag" // plasmic-import: lqv31eB-tK/component
import { useMode } from "./PlasmicGlobalVariant__Mode" // plasmic-import: zulsK3o-3W/globalVariant
import { useScreenVariants as useScreenVariantsekypzdksLjd0F } from "./PlasmicGlobalVariant__Screen" // plasmic-import: EKYPZDKSLjd0F/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_jeffdo_es.module.css" // plasmic-import: mujoL4gD3qd1ezKDLZ31rZ/projectcss
import * as sty from "./PlasmicCaseStudy.module.css" // plasmic-import: SiSovdu-fA/css
import ArrowDownIcon from "./icons/PlasmicIcon__ArrowDown" // plasmic-import: b3K-zpFY_4/icon
import ArrowRightIcon from "./icons/PlasmicIcon__ArrowRight" // plasmic-import: iZuEl1jiaD/icon
import orgtoolHeaderOgUr0KDw from "./images/orgtoolHeader.png" // plasmic-import: OgUr_0kDw/picture
import orgtool01PngY3BRp8Cp1 from "./images/orgtool01Png.png" // plasmic-import: y3bRP8cp1/picture
import orgtool03PngOVR0NOy from "./images/orgtool03Png.png" // plasmic-import: O_V_r0nOy/picture
import orgDesignMeo1PxVz7 from "./images/orgDesign.png" // plasmic-import: meo1PxVZ7/picture
import orgtoolResearchpngJIeMqIOo from "./images/orgtoolResearchpng.png" // plasmic-import: JIeMq-IOo/picture

export const PlasmicCaseStudy__VariantProps = new Array()

export const PlasmicCaseStudy__ArgProps = new Array(
  "heroImage",
  "title",
  "services",
  "description",
  "problem",
  "approach",
  "overviewCaption",
  "work1",
  "work2",
  "work3"
)

function PlasmicCaseStudy__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const globalVariants = ensureGlobalVariants({
    mode: useMode(),
    screen: useScreenVariantsekypzdksLjd0F(),
  })

  return (
    <article
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
        sty.root,
        {
          [projectcss.global_mode_dark]: hasVariant(
            globalVariants,
            "mode",
            "dark"
          ),

          [sty.rootglobal_mode_reveal]: hasVariant(
            globalVariants,
            "mode",
            "reveal"
          ),
        }
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={"/remember"}
        id={"back-button"}
        platform={"gatsby"}
        title={"back to case studies"}
      >
        <BackButton
          data-plasmic-name={"back"}
          data-plasmic-override={overrides.back}
          className={classNames("__wab_instance", sty.back, {
            [sty.backglobal_mode_reveal]: hasVariant(
              globalVariants,
              "mode",
              "reveal"
            ),
          })}
        />
      </p.PlasmicLink>

      {(hasVariant(globalVariants, "mode", "reveal") ? true : true) ? (
        <div
          data-plasmic-name={"hero"}
          data-plasmic-override={overrides.hero}
          className={classNames(projectcss.all, sty.hero, {
            [sty.heroglobal_mode_reveal]: hasVariant(
              globalVariants,
              "mode",
              "reveal"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__z5CWf)}
                displayHeight={"200px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                id={"hero-image"}
                loading={"lazy"}
                src={{
                  src: orgtoolHeaderOgUr0KDw,
                  fullWidth: 1440,
                  fullHeight: 200,
                  aspectRatio: undefined,
                }}
              />
            ),

            value: args.heroImage,
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames(projectcss.all, sty.content, {
          [sty.contentglobal_mode_reveal]: hasVariant(
            globalVariants,
            "mode",
            "reveal"
          ),
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          hasGap={true}
          className={classNames(projectcss.all, sty.header)}
        >
          {true ? (
            <div
              data-plasmic-name={"title"}
              data-plasmic-override={overrides.title}
              className={classNames(projectcss.all, sty.title)}
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
                {"jeff does remember"}
              </div>

              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(projectcss.all, projectcss.h1, sty.h1)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: "an org design tool",
                  value: args.title,
                  className: classNames(sty.slotTargetTitle),
                })}
              </h1>

              <div
                data-plasmic-name={"description"}
                data-plasmic-override={overrides.description}
                className={classNames(projectcss.all, sty.description)}
              >
                {p.renderPlasmicSlot({
                  defaultContents:
                    "robust organizational structure-mapping and transformation planning for enterprise clients",
                  value: args.description,
                  className: classNames(sty.slotTargetDescription),
                })}
              </div>
            </div>
          ) : null}

          <p.Stack
            as={"div"}
            data-plasmic-name={"services"}
            data-plasmic-override={overrides.services}
            hasGap={true}
            className={classNames(projectcss.all, sty.services)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <Tag
                    className={classNames("__wab_instance", sty.tag__biiB9)}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oRvv
                        )}
                      >
                        {"user research"}
                      </div>
                    }
                  />

                  <Tag
                    className={classNames("__wab_instance", sty.tag__kE5P)}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__oegoj
                        )}
                      >
                        {"user testing"}
                      </div>
                    }
                  />

                  <Tag
                    className={classNames("__wab_instance", sty.tag__fgfHd)}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dvlR2
                        )}
                      >
                        {"workshop facilitation"}
                      </div>
                    }
                  />

                  <Tag
                    className={classNames("__wab_instance", sty.tag__hpi5N)}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pxaQd
                        )}
                      >
                        {"prototyping"}
                      </div>
                    }
                  />

                  <Tag
                    className={classNames("__wab_instance", sty.tag__trtnX)}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___52AfD
                        )}
                      >
                        {"agile development"}
                      </div>
                    }
                  />
                </React.Fragment>
              ),

              value: args.services,
              className: classNames(sty.slotTargetServices),
            })}
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          data-plasmic-name={"overview"}
          data-plasmic-override={overrides.overview}
          hasGap={true}
          className={classNames(projectcss.all, sty.overview)}
        >
          {(
            hasVariant(globalVariants, "mode", "reveal")
              ? true
              : hasVariant(globalVariants, "screen", "desktopOnly")
              ? true
              : true
          ) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"overviewImages"}
              data-plasmic-override={overrides.overviewImages}
              hasGap={true}
              className={classNames(projectcss.all, sty.overviewImages, {
                [sty.overviewImagesglobal_mode_reveal]: hasVariant(
                  globalVariants,
                  "mode",
                  "reveal"
                ),
              })}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___4M8J)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___2YcZy)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "desktopOnly")
                        ? "50%"
                        : "50%"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: orgtool01PngY3BRp8Cp1,
                      fullWidth: 840,
                      fullHeight: 477,
                      aspectRatio: undefined,
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__gS99C, {
                      [sty.imgglobal_mode_reveal__gS99Cv94Jk]: hasVariant(
                        globalVariants,
                        "mode",
                        "reveal"
                      ),
                    })}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "desktopOnly")
                        ? "50%"
                        : "50%"
                    }
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: orgtool03PngOVR0NOy,
                      fullWidth: 840,
                      fullHeight: 477,
                      aspectRatio: undefined,
                    }}
                  />
                </p.Stack>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? true
                  : true
              ) ? (
                <p.PlasmicIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  PlasmicIconType={
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? ArrowRightIcon
                      : ArrowDownIcon
                  }
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              ) : null}

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__lAzkm)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? "30%"
                    : "100%"
                }
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"100%"}
                loading={"lazy"}
                src={{
                  src: orgDesignMeo1PxVz7,
                  fullWidth: 2880,
                  fullHeight: 2048,
                  aspectRatio: undefined,
                }}
              />
            </p.Stack>
          ) : null}
          {(hasVariant(globalVariants, "mode", "reveal") ? true : true) ? (
            <div
              data-plasmic-name={"overviewCaption"}
              data-plasmic-override={overrides.overviewCaption}
              className={classNames(projectcss.all, sty.overviewCaption, {
                [sty.overviewCaptionglobal_mode_reveal]: hasVariant(
                  globalVariants,
                  "mode",
                  "reveal"
                ),
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents:
                  "The first two images show the tool before this initiative. The last shows the new, integrated workspace.",
                value: args.overviewCaption,
                className: classNames(sty.slotTargetOverviewCaption, {
                  [sty.slotTargetOverviewCaptionglobal_mode_reveal]: hasVariant(
                    globalVariants,
                    "mode",
                    "reveal"
                  ),
                }),
              })}
            </div>
          ) : null}
          {true ? (
            <div
              data-plasmic-name={"overviewDescription"}
              data-plasmic-override={overrides.overviewDescription}
              className={classNames(projectcss.all, sty.overviewDescription, {
                [sty.overviewDescriptionglobal_mode_dark]: hasVariant(
                  globalVariants,
                  "mode",
                  "dark"
                ),
              })}
            >
              <div
                data-plasmic-name={"problem"}
                data-plasmic-override={overrides.problem}
                className={classNames(projectcss.all, sty.problem, {
                  [sty.problemglobal_mode_dark]: hasVariant(
                    globalVariants,
                    "mode",
                    "dark"
                  ),
                })}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__i9Mpl,
                    {
                      [sty.h3global_mode_dark__i9MpljYvh]: hasVariant(
                        globalVariants,
                        "mode",
                        "dark"
                      ),
                    }
                  )}
                >
                  {"the problem"}
                </h3>

                {p.renderPlasmicSlot({
                  defaultContents:
                    "OrgTool began with a single visualization and diagnostic of an organization's structure. Over the years, various modules and analyses were added, piecemeal, by multiple teams. This led to a disjointed, complicated experience for users and lackluster adoption by clients.",
                  value: args.problem,
                  className: classNames(sty.slotTargetProblem, {
                    [sty.slotTargetProblemglobal_mode_dark]: hasVariant(
                      globalVariants,
                      "mode",
                      "dark"
                    ),
                  }),
                })}
              </div>

              {true ? (
                <div
                  data-plasmic-name={"approach"}
                  data-plasmic-override={overrides.approach}
                  className={classNames(projectcss.all, sty.approach)}
                >
                  <h3
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3__dcsPd
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "desktopOnly")
                      ? "the ask"
                      : "the ask"}
                  </h3>

                  {p.renderPlasmicSlot({
                    defaultContents: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___9TmiC
                        )}
                      >
                        {
                          "Leaders needed a design leader to join the team to partner with engineering and ui designers to evolve OrgTool into a product capable of supporting complex workflows while optimizing user experience and flow—integrating and extending existing functionalities to make OrgTool the paragon of org design software"
                        }
                      </div>
                    ),

                    value: args.approach,
                  })}
                </div>
              ) : null}
            </div>
          ) : null}
        </p.Stack>

        {true ? (
          <div
            data-plasmic-name={"work"}
            data-plasmic-override={overrides.work}
            className={classNames(projectcss.all, sty.work)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3___6KB0
              )}
            >
              {"the work"}
            </h3>

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zGxN9)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__t1Txf)}
                    >
                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4___2SBb1
                        )}
                      >
                        {"user research"}
                      </h4>

                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__uWjBd
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___5L9Dt
                            )}
                          >
                            {
                              "Over the course of several weeks, we carried out dozens of interviews with core OrgTool users and business stakeholders to understand org design from end to end, including how and when OrgTool fit into the process."
                            }
                          </div>

                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__dbx1Y)}
                            displayHeight={"auto"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"50%"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"auto"}
                            loading={"lazy"}
                            src={{
                              src: orgtoolResearchpngJIeMqIOo,
                              fullWidth: 1265,
                              fullHeight: 791,
                              aspectRatio: undefined,
                            }}
                          />
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__pZcZ2
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__pFzr3
                          )}
                        >
                          {
                            "We catalogued and mapped this research to key themes related to the product, organized around user goals and pain points during the different phases of their work."
                          }
                        </div>
                      </div>
                    </div>
                  ),

                  value: args.work1,
                })}

                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                )
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__tkYh
                          )}
                        >
                          <h4
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              projectcss.__wab_text,
                              sty.h4__gxcwv
                            )}
                          >
                            {"design workshops"}
                          </h4>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__uOads
                            )}
                          >
                            {
                              "Over the course of several weeks, we carried out dozens of interviews with core OrgTool users and business stakeholders to understand their goals and pain points."
                            }
                          </div>
                        </div>
                      ),

                      value: args.work2,
                    })
                  : null}
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                )
                  ? p.renderPlasmicSlot({
                      defaultContents: (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__uDUoD
                          )}
                        >
                          <h4
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              projectcss.__wab_text,
                              sty.h4__leY5Y
                            )}
                          >
                            {"development + testing"}
                          </h4>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__gwt9
                            )}
                          >
                            {
                              "Over the course of several weeks, we carried out dozens of interviews with core OrgTool users and business stakeholders to understand their goals and pain points."
                            }
                          </div>
                        </div>
                      ),

                      value: args.work3,
                    })
                  : null}
              </p.Stack>
            ) : null}
          </div>
        ) : null}

        <div
          data-plasmic-name={"gallery"}
          data-plasmic-override={overrides.gallery}
          className={classNames(projectcss.all, sty.gallery, {
            [sty.galleryglobal_mode_dark]: hasVariant(
              globalVariants,
              "mode",
              "dark"
            ),
          })}
        />
      </div>
    </article>
  )
}

const PlasmicDescendants = {
  root: [
    "root",
    "link",
    "back",
    "hero",
    "content",
    "header",
    "title",
    "text",
    "h1",
    "description",
    "services",
    "overview",
    "overviewImages",
    "svg",
    "overviewCaption",
    "overviewDescription",
    "problem",
    "approach",
    "work",
    "gallery",
  ],

  link: ["link", "back"],
  back: ["back"],
  hero: ["hero"],
  content: [
    "content",
    "header",
    "title",
    "text",
    "h1",
    "description",
    "services",
    "overview",
    "overviewImages",
    "svg",
    "overviewCaption",
    "overviewDescription",
    "problem",
    "approach",
    "work",
    "gallery",
  ],

  header: ["header", "title", "text", "h1", "description", "services"],
  title: ["title", "text", "h1", "description"],
  text: ["text"],
  h1: ["h1"],
  description: ["description"],
  services: ["services"],
  overview: [
    "overview",
    "overviewImages",
    "svg",
    "overviewCaption",
    "overviewDescription",
    "problem",
    "approach",
  ],

  overviewImages: ["overviewImages", "svg"],
  svg: ["svg"],
  overviewCaption: ["overviewCaption"],
  overviewDescription: ["overviewDescription", "problem", "approach"],
  problem: ["problem"],
  approach: ["approach"],
  work: ["work"],
  gallery: ["gallery"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCaseStudy__ArgProps,
      internalVariantPropNames: PlasmicCaseStudy__VariantProps,
    })

    return PlasmicCaseStudy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicCaseStudy"
  } else {
    func.displayName = `PlasmicCaseStudy.${nodeName}`
  }
  return func
}

export const PlasmicCaseStudy = Object.assign(
  // Top-level PlasmicCaseStudy renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    back: makeNodeComponent("back"),
    hero: makeNodeComponent("hero"),
    content: makeNodeComponent("content"),
    header: makeNodeComponent("header"),
    title: makeNodeComponent("title"),
    text: makeNodeComponent("text"),
    h1: makeNodeComponent("h1"),
    description: makeNodeComponent("description"),
    services: makeNodeComponent("services"),
    overview: makeNodeComponent("overview"),
    overviewImages: makeNodeComponent("overviewImages"),
    svg: makeNodeComponent("svg"),
    overviewCaption: makeNodeComponent("overviewCaption"),
    overviewDescription: makeNodeComponent("overviewDescription"),
    problem: makeNodeComponent("problem"),
    approach: makeNodeComponent("approach"),
    work: makeNodeComponent("work"),
    gallery: makeNodeComponent("gallery"),
    // Metadata about props expected for PlasmicCaseStudy
    internalVariantProps: PlasmicCaseStudy__VariantProps,
    internalArgProps: PlasmicCaseStudy__ArgProps,
  }
)

export default PlasmicCaseStudy
/* prettier-ignore-end */
