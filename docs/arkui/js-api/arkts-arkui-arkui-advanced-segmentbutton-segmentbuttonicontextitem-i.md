# SegmentButtonIconTextItem

Icon and text button information.

> **NOTE**  
>  
> Both the **icon** and **selectedIcon** attributes must be set. Setting only one of them is invalid.

**Since:** 11

<!--Device-unnamed-interface SegmentButtonIconTextItem--><!--Device-unnamed-interface SegmentButtonIconTextItem-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions, SegmentButtonItemOptionsConstructorOptions, SegmentButtonIconTextItem, SegmentButtonItemOptions, SegmentButtonTextItem, CapsuleSegmentButtonOptions, SegmentButtonOptions, CapsuleSegmentButtonConstructionOptions, SegmentButtonItemTuple, SegmentButton, SegmentButtonItemArray, SegmentButtonItemOptionsArray, SegmentButtonIconItem, BorderRadiusMode, TabSegmentButtonConstructionOptions, TabSegmentButtonOptions, ItemRestriction, DimensionNoPercentage } from '@kit.ArkUI';
```

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

<!--Device-SegmentButtonIconTextItem-accessibilityDescription?: ResourceStr--><!--Device-SegmentButtonIconTextItem-accessibilityDescription?: ResourceStr-End-->

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

<!--Device-SegmentButtonIconTextItem-accessibilityLevel?: string--><!--Device-SegmentButtonIconTextItem-accessibilityLevel?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon: ResourceStr
```

Icon of the unselected item.

If the value is undefined, no icon is displayed.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButtonIconTextItem-icon: ResourceStr--><!--Device-SegmentButtonIconTextItem-icon: ResourceStr-End-->

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

<!--Device-SegmentButtonIconTextItem-iconAccessibilityText?: ResourceStr--><!--Device-SegmentButtonIconTextItem-iconAccessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIcon

```TypeScript
selectedIcon: ResourceStr
```

Icon of the selected item.

If the value is undefined, no icon is displayed.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButtonIconTextItem-selectedIcon: ResourceStr--><!--Device-SegmentButtonIconTextItem-selectedIcon: ResourceStr-End-->

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

<!--Device-SegmentButtonIconTextItem-selectedIconAccessibilityText?: ResourceStr--><!--Device-SegmentButtonIconTextItem-selectedIconAccessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## text

```TypeScript
text: ResourceStr
```

Button text.

If the value is undefined, no text is displayed.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SegmentButtonIconTextItem-text: ResourceStr--><!--Device-SegmentButtonIconTextItem-text: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

