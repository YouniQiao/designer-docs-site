# SegmentButtonV2Item

Defines segmented button item.

**Since:** 18

**Decorator:** @ObservedV2

<!--Device-unnamed-export declare class SegmentButtonV2Item--><!--Device-unnamed-export declare class SegmentButtonV2Item-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OnSelectedIndexesChange, TabSegmentButtonV2, SegmentButtonV2Items, MultiCapsuleSegmentButtonV2, OnSelectedIndexChange, SegmentButtonV2ItemOptions, SegmentButtonV2Item, CapsuleSegmentButtonV2 } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options: SegmentButtonV2ItemOptions)
```

Constructs a **SegmentButtonV2ItemOptions** instance.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-constructor(options: SegmentButtonV2ItemOptions)--><!--Device-SegmentButtonV2Item-constructor(options: SegmentButtonV2ItemOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SegmentButtonV2ItemOptions](arkts-arkui-arkui-advanced-segmentbuttonv2-segmentbuttonv2itemoptions-i.md) | Yes | Options of the item of the **SegmentButtonV2** component. |

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

[Accessibility description](../arkts-components/arkts-arkui-commonmethod-c.md#accessibilitydescription-1) of the segmented button item.

Default value: **""**

If the value is **undefined**, the default value is used.

Decorator type: @Trace

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-accessibilityDescription?: ResourceStr--><!--Device-SegmentButtonV2Item-accessibilityDescription?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

[Accessibility level](../arkts-components/arkts-arkui-commonmethod-c.md#accessibilitylevel-1) of the segmented button item.

Default value: **"auto"**

If the value is **undefined**, the default value is used.

Decorator type: @Trace

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-accessibilityLevel?: string--><!--Device-SegmentButtonV2Item-accessibilityLevel?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
accessibilityText?: ResourceStr
```

[Accessibility text](../arkts-components/arkts-arkui-commonmethod-c.md#accessibilitytext-1) of the segmented button item.

Default value: **""**

If the value is **undefined**, the default value is used.

Decorator type: @Trace

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-accessibilityText?: ResourceStr--><!--Device-SegmentButtonV2Item-accessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enabled

```TypeScript
enabled: boolean
```

Whether the segmented button item is enabled.

Default value: **true**

**true**: enabled. **false**: disabled.

If the value is **undefined**, the default value is used.

Decorator type: @Trace

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-enabled: boolean--><!--Device-SegmentButtonV2Item-enabled: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ResourceStr
```

Image icon of the segmented button item.

Default value: **undefined**

Decorator type: @Trace

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-icon?: ResourceStr--><!--Device-SegmentButtonV2Item-icon?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## iconModifier

```TypeScript
iconModifier?: ImageModifier
```

Image icon modifier for the segmented button item.

Default value: **undefined**

Decorator type: @Trace

**Type:** ImageModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-iconModifier?: ImageModifier--><!--Device-SegmentButtonV2Item-iconModifier?: ImageModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isHybrid

```TypeScript
get isHybrid(): boolean
```

Checks whether the segmented button item contains both text and icon configurations.

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-get isHybrid(): boolean--><!--Device-SegmentButtonV2Item-get isHybrid(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbol

```TypeScript
symbol?: Resource
```

HM Symbol icon of the segmented button item.

Default value: **undefined**

Decorator type: @Trace

**Type:** Resource

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-symbol?: Resource--><!--Device-SegmentButtonV2Item-symbol?: Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolModifier

```TypeScript
symbolModifier?: SymbolGlyphModifier
```

HM Symbol icon modifier for the segmented button item.

Default value: **undefined**

Decorator type: @Trace

**Type:** SymbolGlyphModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-symbolModifier?: SymbolGlyphModifier--><!--Device-SegmentButtonV2Item-symbolModifier?: SymbolGlyphModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## text

```TypeScript
text?: ResourceStr
```

Text of the segmented button item.

Default value: **undefined**

Decorator type: @Trace

**Type:** ResourceStr

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-text?: ResourceStr--><!--Device-SegmentButtonV2Item-text?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textModifier

```TypeScript
textModifier?: TextModifier
```

Text modifier for the segmented button item.

Default value: **undefined**

Decorator type: @Trace

**Type:** TextModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SegmentButtonV2Item-textModifier?: TextModifier--><!--Device-SegmentButtonV2Item-textModifier?: TextModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

