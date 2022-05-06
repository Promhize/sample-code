import React from "react"
import { IPanelProps, Panel as MsPanel, PanelType } from "@fluentui/react"
import { mergeDeepRight } from "ramda"

export type {IPanelProps}
export {PanelType}

export const Panel = ({ children, ...props }: IPanelProps) => (
  <MsPanel {...props} onRenderBody={() => <div>{children}</div>} styles={mergeDeepRight((props.styles || {}), {scrollableContent: ['h-full flex flex-col', {selectors: {'> div:nth-child(2)': {flex: 1}}}]})} />
)
