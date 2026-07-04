# IconItemOptions

Defines the configuration for the trailing builder, with constraints applied to background size and color settings.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipItemLabelOptions, ChipGroupSpaceOptions, SymbolItemOptions, SuffixImageIconOptions, IconGroupSuffix, IconItemOptions, ChipItemStyle, ChipGroupItemOptions, ChipGroup, IconOptions } from '@ohos.arkui.advanced.ChipGroup';
```

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

Accessible description of the suffix icon. You can provide comprehensive text explanations to help users understand the operation they are about to perform and its potential consequences, especially when these cannot be inferred from the component's attributes and accessibility text alone. If an icon contains both text information and the accessible description, the text is announced first and then the accessible description, when the icon is selected. The default value is an empty string. If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

Accessibility level of the suffix icon. It determines whether the icon can be recognized by accessibility services. The options are as follows: **"auto"**: It is treated as "yes" when **action** is set for the icon and as "no" otherwise. **"yes"**: The icon can be recognized by accessibility services. **"no"**: The icon cannot be recognized by accessibility services. **"no-hide-descendants"**: Neither the icon nor its child components can be recognized by accessibility services. Default value: **"auto"** If the value is **undefined**, the default value is used.

**Type:** string

**Default:** "auto"

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
accessibilityText?: ResourceStr
```

Accessibility text, that is, accessibility label name, of the suffix icon. If an icon does not contain text information, it will not be announced by the screen reader when selected. In this case, the screen reader user cannot know which icon is selected. To solve this problem, you can set accessibility text for icons without text information. When such an icon is selected, the screen reader announces the specified accessibility text, informing the user which icon is selected. The default value is an empty string. If the value is **undefined**, the default value is used.

**Type:** ResourceStr

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action: Callback<void>
```

Callback of custom builder items. If the value is **undefined**, the event is unbound.

**Type:** Callback<void>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon: IconOptions
```

Custom builder icon. When the chip size is **ChipSize.SMALL**, the suffix is at {width: 16, height: 16} by default. When the chip size is **ChipSize.NORMAL**, the suffix is at {width: 24, height: 24} by default. To dynamically change the size, you must use the [SymbolGlyphModifier](./arkui/SymbolGlyphModifier:SymbolGlyphModifier) type when importing the [IconGroupSuffix](arkts-arkui-icongroupsuffix-s.md#icongroupsuffix) API. If the value is **undefined**, the default value is used.

**Type:** IconOptions

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

