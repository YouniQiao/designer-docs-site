# gridItem

GridItem组件实例。

## gridItem

```TypeScript
gridItem(value?: GridItemOptions)
```

创建网格容器中单项内容容器。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | GridItemOptions | No | 为GridItem提供可选参数，该对象内含有[GridItemStyle]{@link GridItemStyle}枚举类型的style参  数。 [since 11] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [GridItemAttribute](arkts-griditemattribute-c.md) |  |

### Interfaces

| Name | Description |
| --- | --- |
| [GridItemInterface](arkts-griditeminterface-i.md) | 网格容器中单项内容容器。 > **说明：** > > * > > * 仅支持作为[Grid]{@link grid}组件的子组件使用。 > > * 当GridItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，GridItem子组件在 > GridItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为Grid时，GridItem子组件在GridItem布局时创 > 建。 > > * 当Grid中存在大量GridItem时，使用[columnStart]{@link GridItemAttribute#columnStart}/ > [columnEnd]{@link GridItemAttribute#columnEnd}、[rowStart]{@link GridItemAttribute#rowStart}/ > [rowEnd]{@link GridItemAttribute#rowEnd}设置GridItem大小会导致在使用scrollToIndex滑动到指定Index时，依次遍历GridItem节点，耗时较长。建议使用 > [GridLayoutOptions]{@link GridLayoutOptions}布局，以提高查找GridItem位置的效率。最佳实践请参考 > [优化Grid组件加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve_grid_performance)。 |
| [GridItemOptions](arkts-griditemoptions-i.md) | GridItem样式对象。 |

### Enums

| Name | Description |
| --- | --- |
| [GridItemStyle](arkts-griditemstyle-e.md) | GridItem样式枚举。 > **说明：** > > GridItem焦点态样式设置：Grid组件需要设置4vp规格以上的内边距，用于显示GridItem的焦点框。 |

### Constants

| Name | Description |
| --- | --- |
| [GridItem](arkts-griditem-con.md#GridItem) | 网格容器中单项内容容器。 > **说明：** > > * > > * 仅支持作为[Grid]{@link grid}组件的子组件使用。 > > * 当GridItem配合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，GridItem子组件在 > GridItem创建时创建。配合[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)使用时，或父组件为Grid时，GridItem子组件在GridItem布局时创 > 建。 > > * 当Grid中存在大量GridItem时，使用[columnStart]{@link GridItemAttribute#columnStart}/ > [columnEnd]{@link GridItemAttribute#columnEnd}、[rowStart]{@link GridItemAttribute#rowStart}/ > [rowEnd]{@link GridItemAttribute#rowEnd}设置GridItem大小会导致在使用scrollToIndex滑动到指定Index时，依次遍历GridItem节点，耗时较长。建议使用 > [GridLayoutOptions]{@link GridLayoutOptions}布局，以提高查找GridItem位置的效率。最佳实践请参考 > [优化Grid组件加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-improve_grid_performance)。 ###### 子组件 可以包含单个子组件。 |
| [GridItemInstance](arkts-griditem-con.md#GridItemInstance) | GridItem组件实例。 |

