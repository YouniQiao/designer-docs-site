# DataPanelOptions

数据面板选项。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## max

```TypeScript
max?: number
```

- max大于0时，表示数据的最大值。 - max小于等于0时，max等于value数组各项的和，按比例显示。 默认值：100

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## values

```TypeScript
values: number[]
```

数据值列表，最多包含9个数据，大于9个数据则取前9个数据。若数据值小于0则置为0。

**Type:** number[]

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: DataPanelType
```

数据面板的类型（不支持动态修改）。 默认值：DataPanelType.Circle

**Type:** DataPanelType

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

