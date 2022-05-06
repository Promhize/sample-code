import { IPivotItemProps, IPivotProps, Pivot, PivotItem } from "@fluentui/react"

export const Tabs = ({
  tabs,
  ...props
}: { tabs: IPivotItemProps[] } & IPivotProps) => {
  return (
    <Pivot {...props}>
      {tabs.map((tab) => (
        <PivotItem {...tab} key={tab.itemKey} />
      ))}
    </Pivot>
  )
}
