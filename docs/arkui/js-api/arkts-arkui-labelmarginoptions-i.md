# LabelMarginOptions

Defines the spacing between the text and the left and right icons.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions, CloseOptions, ChipSymbolGlyphOptions, Chip, AccessibilitySelectedType, LabelMarginOptions, LabelOptions, PrefixIconOptions, IconCommonOptions, ChipOptions, ChipSuffixSymbolGlyphOptions, ChipSize, AccessibilityOptions } from '@ohos.arkui.advanced.Chip';
```

## left

```TypeScript
left?: Dimension
```

Spacing between the text and the left icon. This parameter cannot be set in percentage. Default value: When **size** is set to **ChipSize.SMALL**, the default value of **left** is **4**. When **size** is set to **ChipSize.NORMAL**, the default value of **left** is **6**. Unit: vp. If the value is out of the range, the default value is used. Value range: [0, +∞)

**Type:** Dimension

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## right

```TypeScript
right?: Dimension
```

Spacing between the text and the right icon. This parameter cannot be set in percentage. Default value: When **size** is set to **ChipSize.SMALL**, the default value of **right** is **4**. When **size** is set to **ChipSize.NORMAL**, the default value of **right** is **6**. Unit: vp. If the value is out of the range, the default value is used. Value range: [0, +∞)

**Type:** Dimension

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

