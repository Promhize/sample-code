import React from "react"
import {
  DefaultButton,
  IButtonProps,
  IButtonStyles,
  PrimaryButton,
} from "@fluentui/react"
import mergeDeepRight from 'ramda/src/mergeDeepRight'

export const Button = ({ ...props }: IButtonProps) => (
  <PrimaryButton {...props} styles={props.styles ? mergeDeepRight(ButtonStyles.primary, props.styles) : ButtonStyles.primary} />
)
export const BareButton = ({ ...props }: IButtonProps) => (
  <DefaultButton {...props} />
)
export const ButtonStyles: { [key: string]: IButtonStyles } = {
  nostyle: {
    root: ["min-w-0 px-0 border-none border-0 text-left"],
  },
  primary: {
    root: ['bg-purpleX11']
  }
}
