# BarGridColumnOptions

TabBar栅格化方式设置的对象，包括栅格模式下的column边距和间隔，以及小、中、大屏下，页签占用的columns数量。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gutter

```TypeScript
gutter?: Dimension
```

栅格模式下的column间隔（不支持百分比设置）。 默认值：24.0 单位：vp

**Type:** Dimension

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## margin

```TypeScript
margin?: Dimension
```

栅格模式下的column边距（不支持百分比设置）。 默认值：24.0 单位：vp

**Type:** Dimension

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## md

```TypeScript
md?: number
```

中屏下，页签占用的columns数量，必须是非负偶数。中屏为大于等于600vp但小于800vp。 默认值为-1，代表页签占用TabBar全部宽度。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sm

```TypeScript
sm?: number
```

小屏下，页签占用的columns数量，必须是非负偶数。小屏为大于等于320vp但小于600vp。 默认值为-1，代表页签占用TabBar全部宽度。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lg

```TypeScript
lg?: number
```

大屏下，页签占用的columns数量，必须是非负偶数。大屏为大于等于840vp但小于1024vp。 默认值为-1，代表页签占用TabBar全部宽度。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

