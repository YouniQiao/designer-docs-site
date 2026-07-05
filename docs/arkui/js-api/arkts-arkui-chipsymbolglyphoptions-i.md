# ChipSymbolGlyphOptions

Defines the prefix and suffix icon options. > **NOTE** > > The animation type cannot be modified via > [SymbolEffect](SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)) and > animations cannot be set via **effectStrategy**.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions, CloseOptions, ChipSymbolGlyphOptions, Chip, AccessibilitySelectedType, LabelMarginOptions, LabelOptions, PrefixIconOptions, IconCommonOptions, ChipOptions, ChipSuffixSymbolGlyphOptions, ChipSize, AccessibilityOptions } from '@ohos.arkui.advanced.Chip';
```

## activated

```TypeScript
activated?: SymbolGlyphModifier
```

Icon settings for the activated state. Default value: The prefix or suffix icon is not displayed. If the value is **undefined**, the default value is used.

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## normal

```TypeScript
normal?: SymbolGlyphModifier
```

Sets the icon in the inactive state. Default value: The prefix or suffix icon is not displayed. If the value is **undefined**, the default value is used.

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

