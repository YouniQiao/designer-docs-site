# LocalizedLabelMarginOptions

LocalizedLabelMarginOptions用于定义本地化文本与左右侧图标之间间距。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions,CloseOptions,ChipSymbolGlyphOptions,Chip,AccessibilitySelectedType,LabelMarginOptions,LabelOptions,PrefixIconOptions,IconCommonOptions,ChipOptions,ChipSuffixSymbolGlyphOptions,ChipSize,AccessibilityOptions } from '@kit.ArkUI';
```

## start

```TypeScript
start?: LengthMetrics
```

文本与左侧图标之间间距，不支持百分比。 默认值： size为ChipSize.SMALL时，start默认值: `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))` size为ChipSize.NORMAL时，start默认值： `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))` 值为undefined时，按默认值处理。

**Type:** LengthMetrics

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## end

```TypeScript
end?: LengthMetrics
```

文本与右侧图标之间间距，不支持百分比。 默认值： size为ChipSize.SMALL时，end默认值： `LengthMetrics.resource($r('sys.float.chip_small_text_margin'))` size为ChipSize.NORMAL时，end默认值: `LengthMetrics.resource($r('sys.float.chip_normal_text_margin'))` 值为undefined时，按默认值处理。

**Type:** LengthMetrics

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

