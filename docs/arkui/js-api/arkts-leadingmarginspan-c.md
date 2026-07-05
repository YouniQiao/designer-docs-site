# LeadingMarginSpan

文本段落的自定义缩进，仅提供基类，具体实现由开发者定义。

**Since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getLeadingMargin

```TypeScript
abstract getLeadingMargin(): LengthMetrics
```

返回文本段落的缩进距离。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LengthMetrics | 文本段落的缩进。不支持百分比。 默认值：0 |

## onDraw

```TypeScript
abstract onDraw(context: DrawContext, drawInfo: LeadingMarginSpanDrawInfo): void
```

绘制自定义图案。段落中的每一行文本都会触发一次onDraw。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | DrawContext | Yes | 图形绘制上下文。 DrawContext的canvas方法获取的是组件的画布，绘制时不会超出组件的范围。 |
| drawInfo | LeadingMarginSpanDrawInfo | Yes | 自定义绘制信息。 |

