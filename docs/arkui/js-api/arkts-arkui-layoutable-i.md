# Layoutable

Provides the child component layout information.

**Since:** 10

<!--Device-unnamed-declare interface Layoutable--><!--Device-unnamed-declare interface Layoutable-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getborderwidth"></a>
## getBorderWidth

```TypeScript
getBorderWidth() : DirectionalEdgesT<number>
```

Obtains the border widths of the child component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Layoutable-getBorderWidth() : DirectionalEdgesT<number>--><!--Device-Layoutable-getBorderWidth() : DirectionalEdgesT<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [DirectionalEdgesT](../arkts-apis/arkts-arkui-directionaledgest-i.md)&lt;number&gt; | Border widths of the child component. |

<a id="getmargin"></a>
## getMargin

```TypeScript
getMargin() : DirectionalEdgesT<number>
```

Obtains the margin values of the child component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Layoutable-getMargin() : DirectionalEdgesT<number>--><!--Device-Layoutable-getMargin() : DirectionalEdgesT<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [DirectionalEdgesT](../arkts-apis/arkts-arkui-directionaledgest-i.md)&lt;number&gt; | Margin values of the child component. |

<a id="getpadding"></a>
## getPadding

```TypeScript
getPadding() : DirectionalEdgesT<number>
```

Obtains the padding values of the child component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Layoutable-getPadding() : DirectionalEdgesT<number>--><!--Device-Layoutable-getPadding() : DirectionalEdgesT<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [DirectionalEdgesT](../arkts-apis/arkts-arkui-directionaledgest-i.md)&lt;number&gt; | Padding values of the child component. |

<a id="layout"></a>
## layout

```TypeScript
layout(position: Position): void
```

Applies the specified position constraints to the child component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Layoutable-layout(position: Position): void--><!--Device-Layoutable-layout(position: Position): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | [Position](../arkts-apis/arkts-arkui-display-position-i.md) | Yes | Absolute position. |

## measureResult

```TypeScript
measureResult: MeasureResult
```

Measurement result of the child component.Unit: vp.

**Type:** MeasureResult

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Layoutable-measureResult: MeasureResult--><!--Device-Layoutable-measureResult: MeasureResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## uniqueId

```TypeScript
uniqueId?: number
```

Unique ID that the system assigns to the child component.The value must be an integer greater than or equal to 0.

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-Layoutable-uniqueId?: number--><!--Device-Layoutable-uniqueId?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

