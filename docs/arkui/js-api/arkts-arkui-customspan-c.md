# CustomSpan

Describes the custom span. Only the base class is provided. You need to define the specific implementation.

The drag preview of a custom span is blank.

**Since:** 12

<!--Device-unnamed-declare abstract class CustomSpan--><!--Device-unnamed-declare abstract class CustomSpan-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="invalidate"></a>
## invalidate

```TypeScript
invalidate(): void
```

Manually triggers a refresh of the **Text** component that uses this **CustomSpan**.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-CustomSpan-invalidate(): void--><!--Device-CustomSpan-invalidate(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="ondraw"></a>
## onDraw

```TypeScript
abstract onDraw(context: DrawContext,  drawInfo: CustomSpanDrawInfo): void
```

Called to draw a custom span.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomSpan-abstract onDraw(context: DrawContext,  drawInfo: CustomSpanDrawInfo): void--><!--Device-CustomSpan-abstract onDraw(context: DrawContext,  drawInfo: CustomSpanDrawInfo): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [DrawContext](arkts-arkui-graphics-drawcontext-c.md) | Yes | Drawing context.<br>**NOTE**<br>The **canvas** method of **DrawContext** obtains the canvas of the **Text** component. As such, the custom span does not extend beyond the area of the **Text** component. |
| drawInfo | [CustomSpanDrawInfo](arkts-arkui-customspandrawinfo-i.md) | Yes | Drawing information of the custom span. |

<a id="onmeasure"></a>
## onMeasure

```TypeScript
abstract onMeasure(measureInfo: CustomSpanMeasureInfo) : CustomSpanMetrics
```

Called to obtain the size of a custom span.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CustomSpan-abstract onMeasure(measureInfo: CustomSpanMeasureInfo) : CustomSpanMetrics--><!--Device-CustomSpan-abstract onMeasure(measureInfo: CustomSpanMeasureInfo) : CustomSpanMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| measureInfo | [CustomSpanMeasureInfo](arkts-arkui-customspanmeasureinfo-i.md) | Yes | Font size of the text. |

**Return value:**

| Type | Description |
| --- | --- |
| [CustomSpanMetrics](arkts-arkui-customspanmetrics-i.md) | Size of the custom span.<br>**NOTE**<br>The final height of the custom span is subject to the line height of the **Text** component. If no value is specified for **height**, the custom span takes the **fontSize** value of the **Text** component as its height.If the value specified is greater than the height of other child components on the same line, the custom span takes the line height of the **Text** component as its height. |

