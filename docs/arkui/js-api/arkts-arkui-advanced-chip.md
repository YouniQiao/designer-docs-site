# @ohos.arkui.advanced.Chip

## Modules to Import

```TypeScript
import { SuffixIconOptions, CloseOptions, ChipSymbolGlyphOptions, Chip, AccessibilitySelectedType, LabelMarginOptions, LabelOptions, PrefixIconOptions, IconCommonOptions, ChipOptions, ChipSuffixSymbolGlyphOptions, ChipSize, AccessibilityOptions } from '@ohos.arkui.advanced.Chip';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [Chip](arkts-arkui-arkui-advanced-chip-chip-f.md#chip-1) | Build function of Chip. |

### Interfaces

| Name | Description |
| --- | --- |
| [AccessibilityOptions](arkts-arkui-accessibilityoptions-i.md) | Defines the accessibility options of the suffix icon. |
| [ChipOptions](arkts-arkui-chipoptions-i.md) | Defines the type and style parameters of the chip. &gt; **NOTE** &gt; &gt; 1. When **suffixSymbol** is provided with an argument, **suffixIcon** and **allowClose** will not take effect. If &gt; **suffixSymbol** is not provided, but **suffixIcon** is, **allowClose** still will not take effect. When neither &gt; **suffixSymbol** nor **suffixIcon** is provided with arguments, **allowClose** determines whether the deletion icon &gt; is displayed. &gt; &gt; 2. If **undefined** is assigned to **backgroundColor** or **activatedBackgroundColor**, the default background &gt; color is used. If an invalid value is specified, the background color is transparent. &gt; &gt; 3. Default font colors for **prefixSymbol** and **suffixSymbol**: **normalFontColor**: &gt; **[$r('sys.color.ohos_id_color_primary')]**; **activatedFontColor**: &gt; **[$r('sys.color.ohos_id_color_text_primary_contrary')]**. The default value of **fontColor** is **16**. &gt; &gt; 4. The default value of **fillColor** is **$r('sys.color.ohos_id_color_secondary')** for **prefixIcon** and &gt; **$r('sys.color.ohos_id_color_primary')** for **suffixIcon**. The color parsing of **fillColor** is the same as &gt; that of the **Image** component. &gt; &gt; 5. The default value of **activatedFillColor** in **prefixIcon** and **suffixIcon** is &gt; **$r('sys.color.ohos_id_color_text_primary_contrary')**. The color parsing of **activatedFillColor** is the same as &gt; that of the **Image** component. |
| [ChipSuffixSymbolGlyphOptions](arkts-arkui-chipsuffixsymbolglyphoptions-i.md) | Defines the accessibility options of the symbol-type suffix icon. |
| [ChipSymbolGlyphOptions](arkts-arkui-chipsymbolglyphoptions-i.md) | Defines the prefix and suffix icon options. &gt; **NOTE** &gt; &gt; The animation type cannot be modified via &gt; [SymbolEffect](SymbolGlyphAttribute#symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)) and &gt; animations cannot be set via **effectStrategy**. |
| [CloseOptions](arkts-arkui-closeoptions-i.md) | Defines the default close icon behavior attributes for the chip, including accessibility attributes. The default value of **accessibilityText** is **"Delete"**. Inherits from [AccessibilityOptions](arkts-arkui-accessibilityoptions-i.md#accessibilityoptions). |
| [IconCommonOptions](arkts-arkui-iconcommonoptions-i.md) | Defines the common icon options of the chip. &gt; **NOTE** &gt; &gt; **fillColor** and **activatedFillColor** take effect only when the icon format is SVG. |
| [LabelMarginOptions](arkts-arkui-labelmarginoptions-i.md) | Defines the spacing between the text and the left and right icons. |
| [LabelOptions](arkts-arkui-labeloptions-i.md) | Defines text configuration options. |
| [LocalizedLabelMarginOptions](arkts-arkui-localizedlabelmarginoptions-i.md) | Defines the spacing between the localized text and the left and right icons. |
| [PrefixIconOptions](arkts-arkui-prefixiconoptions-i.md) | Defines the prefix icon options. Inherits from [IconCommonOptions](arkts-arkui-iconcommonoptions-i.md#iconcommonoptions). |
| [SuffixIconOptions](arkts-arkui-suffixiconoptions-i.md) | Defines the suffix icon options. Inherits from [IconCommonOptions](arkts-arkui-iconcommonoptions-i.md#iconcommonoptions). |

### Enums

| Name | Description |
| --- | --- |
| [AccessibilitySelectedType](arkts-arkui-accessibilityselectedtype-e.md) | Enumerates the selected state types of the chip. It allows you to specify how accessibility services convey the component's selected state to users. Different selected state types provide distinct semantics and user experiences. |
| [ChipSize](arkts-arkui-chipsize-e.md) | Enumerates the chip size types. |

