import React from "react";
import { DetailsList as MsDetailsList, IDetailsListProps, IColumn, DetailsRow as MsDetailsRow, IDetailsRowProps } from "@fluentui/react";

export type {IColumn, IDetailsListProps}
export const DetailsList = (props: IDetailsListProps) => {
  return <MsDetailsList {...props} />
}
const DetailsRow = MsDetailsRow

export {DetailsRow}