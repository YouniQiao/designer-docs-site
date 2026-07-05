# row_split

Defines RowSplit Component instance.

## row_split

```TypeScript
row_split()
```

带分割线的子组件横向分隔布局。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

### Classes

| Name | Description |
| --- | --- |
| [RowSplitAttribute](arkts-rowsplitattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 支持[通用事件]{@link common}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [RowSplitInterface](arkts-rowsplitinterface-i.md) | 将子组件横向布局，并在每个子组件之间插入纵向分割线。 > **说明： |

### Constants

| Name | Description |
| --- | --- |
| [RowSplit](arkts-row-split-con.md#RowSplit) | 将子组件横向布局，并在每个子组件之间插入纵向分割线。 > **说明：** ###### 子组件 可以包含子组件。 RowSplit通过分割线限制子组件的宽度。初始化时，分割线位置根据子组件的宽度来计算。初始化后，动态修改子组件的宽度不生效，分割线位置保持不变，可以通过拖动相邻分割线改变子组件宽度。 初始化后，动态修改[margin]{@link CommonMethod#margin}、[border]{@link CommonMethod#border}、 [padding]{@link CommonMethod#padding}通用属性导致子组件宽度大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的宽度。 |
| [RowSplitInstance](arkts-row-split-con.md#RowSplitInstance) | Defines RowSplit Component instance. |

