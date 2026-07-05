# CustomSpan

自定义绘制Span，仅提供基类，具体实现由开发者定义。 自定义绘制Span拖拽显示的缩略图为空白。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## invalidate

```TypeScript
invalidate(): void
```

主动刷新使用CustomSpan的Text组件。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDraw

```TypeScript
abstract onDraw(context: DrawContext,  drawInfo: CustomSpanDrawInfo): void
```

绘制自定义绘制Span。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | DrawContext | Yes | 图形绘制上下文。 说明： DrawContext的canvas方法获取的画布是Text组件的画布，绘制时不会超出Text组件的范围。 |
| drawInfo | CustomSpanDrawInfo | Yes | 自定义绘制Span的绘制信息。 |

## onMeasure

```TypeScript
abstract onMeasure(measureInfo: CustomSpanMeasureInfo) : CustomSpanMetrics
```

获取自定义绘制Span的尺寸大小。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| measureInfo | CustomSpanMeasureInfo | Yes | 文本的字体大小。 |

**Return value:**

| Type | Description |
| --- | --- |
| CustomSpanMetrics | 自定义绘制Span的尺寸信息。 说明： 最终的CustomSpan的高度是由当前Text组件的行高所决定的。当height不传值，则默认取  Text组件的fontSize的值作为CustomSpan的高度；当height大于当前行的其他子组件的高度时，此时height即为Text组件的行高。 |

