# GridRowOptions

设置栅格行布局容器的布局选项。

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gutter

```TypeScript
gutter?: Length | GutterOption
```

栅格布局间距。 默认值：0 非法值：按默认值处理。 单位：vp

**Type:** Length | GutterOption

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columns

```TypeScript
columns?: number | GridRowColumnOption
```

设置布局列数。 取值为大于0的整数。 - API version 20之前：默认值为12。 - API version 20及之后：默认值为{ xs: 2, sm: 4, md: 8, lg: 12, xl: 12, xxl: 12 } 非法值：按默认值处理。

**Type:** number | GridRowColumnOption

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## breakpoints

```TypeScript
breakpoints?: BreakPoints
```

设置断点值的断点数组以及基于应用窗口或容器尺寸的相应参照。 默认值： { value: ["320vp", "600vp", "840vp"], reference: BreakpointsReference.WindowSize } 非法值：按默认值处理。 单位：vp

**Type:** BreakPoints

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: GridRowDirection
```

栅格布局排列方向。 默认值：GridRowDirection.Row 非法值：按默认值处理。

**Type:** GridRowDirection

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

