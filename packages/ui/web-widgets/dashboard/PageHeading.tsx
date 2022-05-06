import React from "react"

export type PageHeadingProps = {
  title: [string] | [string, string | number]
}

export const PageHeading = ({ title: [title, number] }: PageHeadingProps) => (
  <h2 className="mb-4 px-8 text-2xl font-bold ">
    {title} {number && <span className="text-purpleX11">({number})</span>}
  </h2>
)
