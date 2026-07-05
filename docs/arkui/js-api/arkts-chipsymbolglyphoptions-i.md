# ChipSymbolGlyphOptions

ChipSymbolGlyphOptions定义前缀图标和后缀图标的属性。 > **说明：** > > 不支持使用[SymbolEffect]SymbolEffect修改动效类型及effectStrategy设置动效。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions,CloseOptions,ChipSymbolGlyphOptions,Chip,AccessibilitySelectedType,LabelMarginOptions,LabelOptions,PrefixIconOptions,IconCommonOptions,ChipOptions,ChipSuffixSymbolGlyphOptions,ChipSize,AccessibilityOptions } from '@kit.ArkUI';
```

## normal

```TypeScript
normal?: SymbolGlyphModifier
```

非激活时图标设定。 默认值：不显示前缀图标或后缀图标 值为undefined时，按默认值处理。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activated

```TypeScript
activated?: SymbolGlyphModifier
```

激活时图标设定。 默认值：不显示前缀图标或后缀图标 值为undefined时，按默认值处理。

**Type:** SymbolGlyphModifier

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

