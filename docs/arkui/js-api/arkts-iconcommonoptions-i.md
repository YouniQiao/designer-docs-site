# IconCommonOptions

IconCommonOptions定义图标的共通属性。 > **说明：** > > 仅在图片格式为SVG时，fillColor和activatedFillColor属性才生效。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions,CloseOptions,ChipSymbolGlyphOptions,Chip,AccessibilitySelectedType,LabelMarginOptions,LabelOptions,PrefixIconOptions,IconCommonOptions,ChipOptions,ChipSuffixSymbolGlyphOptions,ChipSize,AccessibilityOptions } from '@kit.ArkUI';
```

## fillColor

```TypeScript
fillColor?: ResourceColor
```

图标填充颜色。 默认值：$r('sys.color.chip_usually_icon_color') 值为undefined时，按默认值处理。

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activatedFillColor

```TypeScript
activatedFillColor?: ResourceColor
```

操作块激活时图标填充颜色。 默认值：$r('sys.color.chip_active_icon_color') 值为undefined时，按默认值处理。

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size?: SizeOptions
```

图标大小，不支持百分比。 默认值： - 当ChipOptions.size为ChipSize.SMALL时，默认值为：{width: $r('sys.float.chip_small_icon_size'), height: $r(' sys.float.chip_small_icon_size')} - 当ChipOptions.size为ChipSize.NORMAL时，默认值为：{width: $r('sys.float.chip_normal_icon_size'), height: $r(' sys.float.chip_normal_icon_size')} 单位：vp 值为undefined时，按默认值处理。

**Type:** SizeOptions

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src: ResourceStr
```

图标图片或图片地址引用。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

