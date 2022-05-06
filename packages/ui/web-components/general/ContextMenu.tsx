import { ContextualMenu, IContextualMenuProps } from "@fluentui/react"
import React from "react"

type Props = {} & IContextualMenuProps

export const ContextMenu = (props: Props) => {
  return <ContextualMenu {...props} />
}