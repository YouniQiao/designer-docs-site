# SegmentButtonItemOptions

Button options in a segmented button.

**Since:** 11

**Decorator:** @Observed

<!--Device-unnamed-declare class SegmentButtonItemOptions--><!--Device-unnamed-declare class SegmentButtonItemOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions, SegmentButtonItemOptionsConstructorOptions, SegmentButtonIconTextItem, SegmentButtonItemOptions, SegmentButtonTextItem, CapsuleSegmentButtonOptions, SegmentButtonOptions, CapsuleSegmentButtonConstructionOptions, SegmentButtonItemTuple, SegmentButton, SegmentButtonItemArray, SegmentButtonItemOptionsArray, SegmentButtonIconItem, BorderRadiusMode, TabSegmentButtonConstructionOptions, TabSegmentButtonOptions, ItemRestriction, DimensionNoPercentage } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(options: SegmentButtonItemOptionsConstructorOptions)
```

Constructor.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButtonItemOptions-constructor(options: SegmentButtonItemOptionsConstructorOptions)--><!--Device-SegmentButtonItemOptions-constructor(options: SegmentButtonItemOptionsConstructorOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SegmentButtonItemOptionsConstructorOptions](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttonitemoptionsconstructoroptions-i.md) | Yes | Configuration options for a single segmented button, including the icon, text, and accessibility attributes. |

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

Accessibility description, which is used to explain component operations to users. You can set detailed description text to help users understand the operation consequences. If a component has both text and accessibility description, the text is read first, and then the accessibility description is read.

The default value is an empty string.

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Default:** ""

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-SegmentButtonItemOptions-accessibilityDescription?: ResourceStr--><!--Device-SegmentButtonItemOptions-accessibilityDescription?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

Accessibility level, which is used to set whether the current component can be recognized by accessibility services.

The options are as follows:

**"auto"**: The component can be recognized by accessibility services.

**"yes"**: The component can be recognized by accessibility services.

**"no"**: The component cannot be recognized by accessibility services.

**"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility services.

Default value: **"auto"**

If the value is **undefined**, the default value is used.

**Type:** string

**Default:** "auto"

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-SegmentButtonItemOptions-accessibilityLevel?: string--><!--Device-SegmentButtonItemOptions-accessibilityLevel?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ResourceStr
```

Icon of the unselected item.

Default value: The icon of the button in the unselected state is not displayed.

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButtonItemOptions-icon?: ResourceStr--><!--Device-SegmentButtonItemOptions-icon?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## iconAccessibilityText

```TypeScript
iconAccessibilityText?: ResourceStr
```

Accessibility text of the unselected item.

The default value is an empty string.

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Default:** ""

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-SegmentButtonItemOptions-iconAccessibilityText?: ResourceStr--><!--Device-SegmentButtonItemOptions-iconAccessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIcon

```TypeScript
selectedIcon?: ResourceStr
```

Icon of the selected item.

Default value: no button icon in the selected state

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButtonItemOptions-selectedIcon?: ResourceStr--><!--Device-SegmentButtonItemOptions-selectedIcon?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIconAccessibilityText

```TypeScript
selectedIconAccessibilityText?: ResourceStr
```

Accessibility text of the selected item.

The default value is an empty string.

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Default:** ""

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-SegmentButtonItemOptions-selectedIconAccessibilityText?: ResourceStr--><!--Device-SegmentButtonItemOptions-selectedIconAccessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## text

```TypeScript
text?: ResourceStr
```

Button text.

The default value is an empty string.

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButtonItemOptions-text?: ResourceStr--><!--Device-SegmentButtonItemOptions-text?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

