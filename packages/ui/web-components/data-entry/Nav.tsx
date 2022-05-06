import React from "react"
import { INavProps, Nav as MsNav } from "@fluentui/react"
import { mergeDeepRight } from "ramda"
// import { colors } from "../.."

export type { INavProps }

const defaultStyles: INavProps['styles'] = {
  compositeLink: {
    'selectors': {
      '.ms-Button::after': {
        display: 'none'
      },
      '.ms-Button-icon': {
        color: '#999'
      },
      '&.is-selected .ms-Button-icon': {
        color: '#333 !important'
      }
    },
  },
  link: {
    background: 'none'
  },
}

export const Nav = ({ ...props }: INavProps) => <MsNav {...props} styles={mergeDeepRight(defaultStyles, props.styles || {})} />
