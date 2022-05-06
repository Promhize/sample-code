import { ISpinnerProps, Spinner as MsSpinner } from "@fluentui/react"

type Props = {} & ISpinnerProps

export const Spinner = (props: Props) => {
  return <MsSpinner {...props} />
}