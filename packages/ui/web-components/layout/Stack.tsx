import React from "react"
import { IStackProps, Stack as MsStack } from "@fluentui/react"

export const Stack = ({ children, ...props }: IStackProps) => (
  <MsStack {...props}>{children}</MsStack>
)
