# GridRowDirection

```TypeScript
declare enum GridRowDirection
```

栅格元素排列方向。 > **说明：** > > - 栅格元素仅支持Row/RowReverse排列，不支持column/ColumnReverse方向排列。 > > - 栅格子组件仅能通过span、offset计算子组件位置与大小。多个子组件span超过规定列数时自动换行。 > > - 单个元素span大小超过最大列数时后台默认span为最大column数。 > > - 新一行的Offset加上子组件的span超过总列数时，将下一个子组件在新的一行放置。 > > - 例：Item1: GridCol({ span: 6 })， Item2: GridCol({ span: 8, offset:11 })。 > > > > ! > [figures/gridRowOffsetToNextLine.png](docroot://reference/apis-arkui/arkui-ts/figures/gridRowOffsetToNextLine.png)

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Row

```TypeScript
Row = 0
```

栅格元素按照行方向排列。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## RowReverse

```TypeScript
RowReverse = 1
```

栅格元素按照逆序行方向排列。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

