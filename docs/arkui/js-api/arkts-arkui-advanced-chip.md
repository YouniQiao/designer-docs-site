# @ohos.arkui.advanced.Chip

## Modules to Import

```TypeScript
import { SuffixIconOptions,CloseOptions,ChipSymbolGlyphOptions,Chip,AccessibilitySelectedType,LabelMarginOptions,LabelOptions,PrefixIconOptions,IconCommonOptions,ChipOptions,ChipSuffixSymbolGlyphOptions,ChipSize,AccessibilityOptions } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [Chip](arkts-arkui-advanced-chip-chip-f.md#Chip-1) | Chip的构建函数。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AccessibilityOptions](arkts-accessibilityoptions-i.md) | 后缀图标的无障碍朗读功能属性。 |
| [ChipOptions](arkts-chipoptions-i.md) | ChipOptions定义Chip的样式及具体式样参数。 > **说明：** > > 1. 当`suffixSymbol`有传入参数时，`suffixIcon`和`allowClose`不生效；当`suffixSymbol`没有传入参数而`suffixIcon`有传入参数时，`allowClose`不生效；当 > `suffixSymbol`和`suffixIcon`都没有传入参数时，`allowClose`决定是否显示删除图标。 > > 2. `backgroundColor`和`activatedBackgroundColor`赋值为`undefined`时，显示默认背景颜色；赋值为非法值时，背景颜色透明。 > > 3. prefixSymbol/suffixSymbol的fontColor默认值为：normalFontColor: `[$r('sys.color.ohos_id_color_primary')]`、 > activatedFontColor: `[$r('sys.color.ohos_id_color_text_primary_contrary')]`。fontColor默认值为16。 > > 4. prefixIcon的fillColor默认值为：`$r('sys.color.ohos_id_color_secondary')`，suffixIcon的fillColor默认值为： > `$r('sys.color.ohos_id_color_primary')`。fillColor对颜色的解析与Image组件保持一致。 > > 5. prefixIcon和suffixIcon的activatedFillColor默认值均为：`$r('sys.color.ohos_id_color_text_primary_contrary')`。 > activatedFillColor对颜色的解析与Image组件保持一致。 |
| [ChipSuffixSymbolGlyphOptions](arkts-chipsuffixsymbolglyphoptions-i.md) | symbol类型后缀图标属性的无障碍朗读功能属性类型。 |
| [ChipSymbolGlyphOptions](arkts-chipsymbolglyphoptions-i.md) | ChipSymbolGlyphOptions定义前缀图标和后缀图标的属性。 > **说明：** > > 不支持使用[SymbolEffect]{@link SymbolEffect}修改动效类型及effectStrategy设置动效。 |
| [CloseOptions](arkts-closeoptions-i.md) | CloseOptions用于定义Chip组件默认的关闭图标功能属性，包括无障碍功能属性，其中accessibilityText默认为"删除"。 继承于[AccessibilityOptions]{@link AccessibilityOptions}。 |
| [IconCommonOptions](arkts-iconcommonoptions-i.md) | IconCommonOptions定义图标的共通属性。 > **说明：** > > 仅在图片格式为SVG时，fillColor和activatedFillColor属性才生效。 |
| [LabelMarginOptions](arkts-labelmarginoptions-i.md) | LabelMarginOptions用于定义文本与左右侧图标之间间距。 |
| [LabelOptions](arkts-labeloptions-i.md) | LabelOptions定义文本属性。 |
| [LocalizedLabelMarginOptions](arkts-localizedlabelmarginoptions-i.md) | LocalizedLabelMarginOptions用于定义本地化文本与左右侧图标之间间距。 |
| [PrefixIconOptions](arkts-prefixiconoptions-i.md) | PrefixIconOptions定义前缀图标的属性。 继承于[IconCommonOptions]{@link IconCommonOptions}。 |
| [SuffixIconOptions](arkts-suffixiconoptions-i.md) | SuffixIconOptions定义后缀图标的属性。 继承于[IconCommonOptions]{@link IconCommonOptions}。 |

### Enums

| Name | Description |
| --- | --- |
| [AccessibilitySelectedType](arkts-accessibilityselectedtype-e.md) | AccessibilitySelectedType是Chip可指定的选中态类型，用于控制无障碍服务如何向用户传达组件的选中状态。不同的选中态类型提供了不同的语义和用户体验。 |
| [ChipSize](arkts-chipsize-e.md) | Enum for ChipSize |

