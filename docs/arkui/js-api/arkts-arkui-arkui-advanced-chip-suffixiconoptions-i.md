# SuffixIconOptions

Defines the suffix icon options.

Inherits from [IconCommonOptions](arkts-arkui-arkui-advanced-chip-iconcommonoptions-i.md).

**Inheritance/Implementation:** SuffixIconOptions extends [IconCommonOptions](arkts-arkui-arkui-advanced-chip-iconcommonoptions-i.md)

**Since:** 11

<!--Device-unnamed-export interface SuffixIconOptions extends IconCommonOptions--><!--Device-unnamed-export interface SuffixIconOptions extends IconCommonOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions, CloseOptions, ChipSymbolGlyphOptions, Chip, AccessibilitySelectedType, LabelMarginOptions, LabelOptions, PrefixIconOptions, IconCommonOptions, ChipOptions, ChipSuffixSymbolGlyphOptions, ChipSize, AccessibilityOptions } from '@kit.ArkUI';
```

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

Accessible description of the suffix icon. You can provide comprehensive text explanations to help users understand the operation they are about to perform and its potential consequences, especially when these cannot be inferred from the component's attributes and accessibility text alone. If a component contains both text information and the accessible description, the text is announced first and then the accessible description, when the component is selected.

Default value: **''**

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-SuffixIconOptions-accessibilityDescription?: ResourceStr--><!--Device-SuffixIconOptions-accessibilityDescription?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

Accessibility level of the suffix icon. It determines whether the component can be recognized by accessibility services.

The options are as follows:

**"auto"**: It is treated as "yes" when **action** is set for the component and as "no" otherwise.

**"yes"**: The component can be recognized by accessibility services.

**"no"**: The component cannot be recognized by accessibility services.

**"no-hide-descendants"**: Neither the component nor its child components can be recognized by accessibility services.

Default value: **"auto"**

If the value is **undefined**, the default value is used.

**Type:** string

**Default:** "auto"

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-SuffixIconOptions-accessibilityLevel?: string--><!--Device-SuffixIconOptions-accessibilityLevel?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
accessibilityText?: ResourceStr
```

Accessibility text, that is, accessibility label name, of the suffix icon. If a component does not contain text information, it will not be announced by the screen reader when selected. In this case, the screen reader user cannot know which component is selected. To solve this problem, you can set accessibility text for components without text information. When such a component is selected, the screen reader announces the specified accessibility text, informing the user which component is selected.

Default value: **''**

If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-SuffixIconOptions-accessibilityText?: ResourceStr--><!--Device-SuffixIconOptions-accessibilityText?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action?: () => void
```

Action of the suffix icon.

If the value is **undefined**, no action is configured for the suffix icon.

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SuffixIconOptions-action?: () => void--><!--Device-SuffixIconOptions-action?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

