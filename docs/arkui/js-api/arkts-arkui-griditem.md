# GridItem

The **GridItem** component provides a single item in a grid. > **NOTE** > > * > > * This component can be used only as a child of [Grid]{@link grid}. > > * When this component is used with > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md), its child components are > created when it is created. When this component is used with > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) or > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md), or when the parent component is > **Grid**, its child components are created when it is laid out. > > * If a **Grid** component contains a large number of **GridItem** components, using > [columnStart]{@link GridItemAttribute#columnStart}/[columnEnd]{@link GridItemAttribute#columnEnd} or > [rowStart]{@link GridItemAttribute#rowStart}/[rowEnd]{@link GridItemAttribute#rowEnd} to set the size of > **GridItem** components can lead to performance issues, especially when **scrollToIndex** is used to scroll to a > specific index. This is because **Grid** will traverse all **GridItem** nodes sequentially to find the specified > index, which can be time-consuming. To address this issue, it is recommended that you use > [GridLayoutOptions]{@link GridLayoutOptions} for layout, which significantly improves the efficiency of finding the > position of **GridItem** components. For best practices, see > [Optimizing Frame Loss for Grid Component Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-improve_grid_performance).

## GridItem

```TypeScript
GridItem(value?: GridItemOptions)
```

Creates a **GridItem** component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | GridItemOptions | No | Parameters of the grid item, containing the **style** parameter of the[GridItemStyle]{@link GridItemStyle} enum type. |

## Summary

- [GridItemOptions](arkts-arkui-griditem-griditemoptions-i.md)
- [GridItemStyle](arkts-arkui-griditem-griditemstyle-e.md)
