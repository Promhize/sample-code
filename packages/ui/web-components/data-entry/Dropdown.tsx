import React from "react"
import { Dropdown as MsDropdown, IDropdownProps } from "@fluentui/react"

export const Dropdown = ({ ...props }: IDropdownProps) => {
  return <MsDropdown {...props} />
}
