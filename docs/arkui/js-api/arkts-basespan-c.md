# BaseSpan

定义BaseSpan基础类，包含Span的通用属性。

**Inheritance:** BaseSpanextends: CommonMethod<T>.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## baselineOffset

```TypeScript
baselineOffset(value: LengthMetrics): T
```

设置Span基线的偏移量。此属性与父组件的baselineOffset是共存的。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes | 设置Span基线的偏移量，设置该值为百分比时，按默认值显示。 正数内容向上偏移，负数向下偏移。 默认值：0 在ImageSpan中，设置为非  0时，[verticalAlign]ImageSpanAttribute#verticalAlign将固定为ImageSpanAlignment.BASELINE对齐；设置为0时，要使基线对齐策略生效，需同  时设置[verticalAlign]ImageSpanAttribute#verticalAlign为ImageSpanAlignment.BASELINE。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前Span的属性。 |

## textBackgroundStyle

```TypeScript
textBackgroundStyle(style: TextBackgroundStyle): T
```

设置背景样式。作为[ContainerSpan]container_span的子组件时可以继承它的此属性值，优先使用其自身的此属性。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | TextBackgroundStyle | Yes | 背景样式。 默认值: { color: Color.Transparent, radius: 0} |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前Span的属性。 |

