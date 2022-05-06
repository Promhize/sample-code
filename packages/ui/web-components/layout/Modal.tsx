import React from "react"
import { IModalProps, Modal as MsModal } from "@fluentui/react"
import { mergeDeepRight } from "ramda"

export type {IModalProps}
export const Modal = (props: IModalProps) => <MsModal {...props} styles={mergeDeepRight(styles.default, props.styles || {})} />

const styles = {
  default: {
    main: {borderRadius: '5px',}
  }
}