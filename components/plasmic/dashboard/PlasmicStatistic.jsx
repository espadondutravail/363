// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oF7mM9CEBfWYWQRSFqDF3g
// Component: O2_wvXe6dbbS
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oF7mM9CEBfWYWQRSFqDF3g/projectcss
import sty from "./PlasmicStatistic.module.css"; // plasmic-import: O2_wvXe6dbbS/css

createPlasmicElementProxy;

export const PlasmicStatistic__VariantProps = new Array(
  "hideIcon",
  "hideTrendTracker"
);

export const PlasmicStatistic__ArgProps = new Array(
  "unit",
  "number",
  "timeRange",
  "numberTrend"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStatistic__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "hideIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideIcon
      },
      {
        path: "hideTrendTracker",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.hideTrendTracker
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
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
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.roothideIcon]: hasVariant($state, "hideIcon", "hideIcon"),
          [sty.roothideTrendTracker]: hasVariant(
            $state,
            "hideTrendTracker",
            "hideTrendTracker"
          )
        }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <div className={classNames(projectcss.all, sty.freeBox___6OFfs)}>
            <p
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p__p7LQ
              )}
            >
              {"Active Users"}
            </p>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__sYv27, {
                [sty.imghideIcon__sYv27A7W1L]: hasVariant(
                  $state,
                  "hideIcon",
                  "hideIcon"
                )
              })}
              displayHeight={"auto"}
              displayMaxHeight={"28px"}
              displayMaxWidth={"28px"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
            />
          </div>
        ),

        value: args.unit,
        className: classNames(sty.slotTargetUnit)
      })}
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__aOuWc)}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__j2Va, {
            [sty.freeBoxhideIcon__j2VaA7W1L]: hasVariant(
              $state,
              "hideIcon",
              "hideIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8Tf96
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__ye2Um
                      )}
                    >
                      {"NULL"}
                    </h2>
                  }

                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            ),

            value: args.number
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__xVziw)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__r0XTi, {
              [sty.freeBoxhideTrendTracker__r0XTiMjx5O]: hasVariant(
                $state,
                "hideTrendTracker",
                "hideTrendTracker"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__eaDwi, {
                [sty.freeBoxhideTrendTracker__eaDwimjx5O]: hasVariant(
                  $state,
                  "hideTrendTracker",
                  "hideTrendTracker"
                )
              })}
            >
              <div className={classNames(projectcss.all, sty.freeBox__pXztW)}>
                {renderPlasmicSlot({
                  defaultContents: "NULL",
                  value: args.numberTrend,
                  className: classNames(sty.slotTargetNumberTrend)
                })}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__cFfq)}>
              <div className={classNames(projectcss.all, sty.freeBox__uTjs0)}>
                {renderPlasmicSlot({
                  defaultContents: "from last month",
                  value: args.timeRange,
                  className: classNames(sty.slotTargetTimeRange)
                })}
              </div>
            </div>
          </Stack__>
        </div>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicStatistic__ArgProps,
          internalVariantPropNames: PlasmicStatistic__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStatistic__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStatistic";
  } else {
    func.displayName = `PlasmicStatistic.${nodeName}`;
  }
  return func;
}

export const PlasmicStatistic = Object.assign(
  // Top-level PlasmicStatistic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicStatistic
    internalVariantProps: PlasmicStatistic__VariantProps,
    internalArgProps: PlasmicStatistic__ArgProps
  }
);

export default PlasmicStatistic;
/* prettier-ignore-end */
