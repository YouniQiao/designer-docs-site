# ProgressOptions

进度条选项。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## total

```TypeScript
total?: number
```

指定进度总长。设置小于等于0的数值时置为100。 默认值：100

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: ProgressStyle
```

指定进度条样式。 该参数从API version8开始废弃，建议使用type替代。 默认值：ProgressStyle.Linear

**Type:** ProgressStyle

**Since:** 7

**Deprecated since:** 8

**Substitute:** type

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: Type
```

指定进度条类型。 默认值：ProgressType.Linear **说明：** 不同的type需分别对应相应的[style](arkts-progressattribute-c.md#style)属性设置，详细映射关系参考 [ProgressStyleMap](arkts-progressstylemap-i.md#ProgressStyleMap)。

**Type:** Type

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: number
```

指定当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。 默认值：0 取值范围：[0, total]

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

