# CloseOptions

CloseOptions用于定义Chip组件默认的关闭图标功能属性，包括无障碍功能属性，其中accessibilityText默认为"删除"。 继承于[AccessibilityOptions](arkts-accessibilityoptions-i.md#AccessibilityOptions)。

**Inheritance:** CloseOptionsextends: AccessibilityOptions.

**Since:** 14

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SuffixIconOptions,CloseOptions,ChipSymbolGlyphOptions,Chip,AccessibilitySelectedType,LabelMarginOptions,LabelOptions,PrefixIconOptions,IconCommonOptions,ChipOptions,ChipSuffixSymbolGlyphOptions,ChipSize,AccessibilityOptions } from '@kit.ArkUI';
```

## fontSize

```TypeScript
fontSize?: Dimension
```

设置Chip组件默认关闭图标的大小，不支持百分比。 默认值： size为ChipSize.SMALL时，`默认值：$r('sys.float.chip_small_font_size')` 其他情况默认值：`$r('sys.float.chip_normal_font_size')` 值为undefined时，按默认值处理。

**Type:** Dimension

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

