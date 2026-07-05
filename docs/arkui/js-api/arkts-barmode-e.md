# BarMode

```TypeScript
declare enum BarMode
```

TabBar布局模式枚举。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Scrollable

```TypeScript
Scrollable = 0
```

每一个TabBar均使用实际布局宽度，超过总长度（横向Tabs的[barWidth](arkts-tabsattribute-c.md#barWidth)，纵向Tabs的 [barHeight](arkts-tabsattribute-c.md#barHeight)）后可滑动。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Fixed

```TypeScript
Fixed = 1
```

所有TabBar平均分配barWidth宽度（纵向时平均分配barHeight高度）。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

