# IndicatorComponent properties/events

Defines the IndicatorComponent attribute functions.

**Inheritance/Implementation:** IndicatorComponentAttribute extends [CommonMethod<IndicatorComponentAttribute>](CommonMethod<IndicatorComponentAttribute>)

**Since:** 15

<!--Device-unnamed-declare class IndicatorComponentAttribute extends CommonMethod<IndicatorComponentAttribute>--><!--Device-unnamed-declare class IndicatorComponentAttribute extends CommonMethod<IndicatorComponentAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="count"></a>
## count

```TypeScript
count(totalCount: number)
```

Sets the total number of indicator.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-IndicatorComponentAttribute-count(totalCount: number): IndicatorComponentAttribute--><!--Device-IndicatorComponentAttribute-count(totalCount: number): IndicatorComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| totalCount | number | Yes |  |

<a id="initialindex"></a>
## initialIndex

```TypeScript
initialIndex(index: number)
```

Called when the index value of the displayed subcomponent is set in the container.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-IndicatorComponentAttribute-initialIndex(index: number): IndicatorComponentAttribute--><!--Device-IndicatorComponentAttribute-initialIndex(index: number): IndicatorComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes |  |

<a id="loop"></a>
## loop

```TypeScript
loop(isLoop: boolean)
```

Called when setting whether to turn on cyclic sliding.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-IndicatorComponentAttribute-loop(isLoop: boolean): IndicatorComponentAttribute--><!--Device-IndicatorComponentAttribute-loop(isLoop: boolean): IndicatorComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLoop | boolean | Yes |  |

<a id="onchange"></a>
## onChange

```TypeScript
onChange(event: Callback<number>)
```

Called when the index value changes.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-IndicatorComponentAttribute-onChange(event: Callback<number>): IndicatorComponentAttribute--><!--Device-IndicatorComponentAttribute-onChange(event: Callback<number>): IndicatorComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;number&gt; | Yes |  |

<a id="style"></a>
## style

```TypeScript
style(indicatorStyle: DotIndicator | DigitIndicator)
```

Sets the indicator style.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-IndicatorComponentAttribute-style(indicatorStyle: DotIndicator | DigitIndicator): IndicatorComponentAttribute--><!--Device-IndicatorComponentAttribute-style(indicatorStyle: DotIndicator | DigitIndicator): IndicatorComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| indicatorStyle | [DotIndicator](arkts-arkui-dotindicator-c.md) \| DigitIndicator | Yes | the style value |

<a id="vertical"></a>
## vertical

```TypeScript
vertical(isVertical: boolean)
```

Called when setting whether to slide vertically.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-IndicatorComponentAttribute-vertical(isVertical: boolean): IndicatorComponentAttribute--><!--Device-IndicatorComponentAttribute-vertical(isVertical: boolean): IndicatorComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isVertical | boolean | Yes |  |

