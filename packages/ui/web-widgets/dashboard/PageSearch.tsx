import { ITextFieldProps } from "@fluentui/react"
import { MagnifyingGlass } from "phosphor-react"
import React from "react"
import { TextField } from "../.."

export const PageSearch = ({
  placeholder,
}: Pick<ITextFieldProps, "placeholder">) => {
  return (
    <div className="w-full flex items-center relative border border-gray-200 border-solid rounded overflow-hidden">
      <TextField
        placeholder={placeholder}
        styles={{
          fieldGroup: [
            {
              border: "none",
              paddingLeft: "2rem",
              background: "none",
              outline: "none",
              selectors: {
                "&::after": {
                  display: "none",
                },
              },
              borderRadius: "0.25rem",
              height: "44px",
            },
          ],
          field: {},
        }}
        className="w-full bg-white "
      />
      <span className="mr-2 absolute left-3">
        <MagnifyingGlass size={16} color="#767" />
      </span>
    </div>
  )
}
