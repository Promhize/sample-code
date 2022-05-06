import { Calendar as MsCalendar, ICalendarProps } from "@fluentui/react"
import React from "react"

export const Calendar = ({...props}: ICalendarProps) => {
  return (
    <MsCalendar
      {...props}
    />
  )
}