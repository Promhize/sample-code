import EChartsReact, { EChartsReactProps } from "echarts-for-react"
import React from "react"

export const Chart = ({...props}: EChartsReactProps) => {
  return <EChartsReact {...props} />
}