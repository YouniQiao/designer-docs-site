# LabelMarginOptions

LabelMarginOptions用于定义文本与左右侧图标之间间距。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions,CloseOptions,ChipSymbolGlyphOptions,Chip,AccessibilitySelectedType,LabelMarginOptions,LabelOptions,PrefixIconOptions,IconCommonOptions,ChipOptions,ChipSuffixSymbolGlyphOptions,ChipSize,AccessibilityOptions } from '@kit.ArkUI';
```

## left

```TypeScript
left?: Dimension
```

文本与左侧图标之间间距，不支持百分比。 默认值： size为ChipSize.SMALL时，left默认值：4 size为ChipSize.NORMAL时，left默认值：6 单位：vp 超出取值范围按默认值处理。 取值范围：[0, +∞)

**Type:** Dimension

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## right

```TypeScript
right?: Dimension
```

文本与右侧图标之间间距，不支持百分比。 默认值： size为ChipSize.SMALL时，right默认值：4 size为ChipSize.NORMAL时，right默认值：6 单位：vp 超出取值范围按默认值处理。 取值范围：[0, +∞)

**Type:** Dimension

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

