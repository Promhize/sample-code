import React from "react"
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize"

export const TextAreaAutoSize = ({ ...props }: TextareaAutosizeProps) => (
  <TextareaAutosize {...props} />
)
