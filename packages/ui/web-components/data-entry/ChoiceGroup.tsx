import React from "react"
import {
  ChoiceGroup as MsChoiceGroup,
  IChoiceGroupProps,
} from "@fluentui/react"

const ChoiceGroup = ({ ...props }: IChoiceGroupProps) => {
  return <MsChoiceGroup {...props} />
}
