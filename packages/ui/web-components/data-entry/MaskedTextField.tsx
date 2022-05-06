import {
  IMaskedTextFieldProps,
  MaskedTextField as MsMaskedTextField,
} from "@fluentui/react"
import React from "react"
import { UseControllerProps, Controller, FieldValues } from "react-hook-form"

export const MaskedTextField = ({ ...props }: IMaskedTextFieldProps) => (
  <MsMaskedTextField {...props} />
)

type ControlledProps<T> = {
  inputProps: IMaskedTextFieldProps
  controllerProps: UseControllerProps<T>
}

export function ControlledMaskedTextField<T extends FieldValues>({
  controllerProps,
  inputProps,
}: ControlledProps<T>) {
  return (
    <Controller
      {...controllerProps}
      render={({ field }) => <MsMaskedTextField {...inputProps} {...field} />}
    />
  )
}
