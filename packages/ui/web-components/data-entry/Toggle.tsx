import { IToggleProps, Toggle as MsToggle } from "@fluentui/react";
import { mergeDeepRight } from "ramda";
import React from "react"
import { colors } from "../..";

export const toggleStyles = {
  default: {
    root: {
      '&.is-checked button': {
        background: colors.primary
      }
    }
  }
}
export const Toggle = (props: IToggleProps) => <MsToggle {...props} styles={mergeDeepRight(toggleStyles.default, props.styles || {})} />
