import React from "react"
import { TextField as MsTextField, ITextFieldProps } from "@fluentui/react"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

export const TextField = (props: ITextFieldProps) => (
  <MsTextField
    styles={{
      field: {
        selectors: {
          "::placeholder": {
            color: "#acabad",
          },
        },
      },
      subComponentStyles: {
        label: {
          root: ["text-gray-500", "font-normal"],
        },
      },
    }}
    {...props}
  />
)

type ControlledProps<T> = {
  inputProps: ITextFieldProps
  controllerProps: UseControllerProps<T>
}

export function ControlledTextField<T extends FieldValues> ({ controllerProps, inputProps }: ControlledProps<T>){return (
  <Controller
    {...controllerProps}
    render={({field}) => <MsTextField {...inputProps} {...field} />}
  />
)}