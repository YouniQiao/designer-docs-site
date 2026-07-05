# ChipItemStyle

ChipItemStyle定义了Chip的共通属性。 > **说明：** > > 1. 操作块的大小有两种类型，一种是ChipSize，提供NORMAL和SMALL两种尺寸供选择；另一种是SizeOptions。 > > 2. backgroundColor、selectedBackgroundColor传入undefined时，显示默认背景颜色，传入非法值时，背景色透明。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipItemLabelOptions,ChipGroupSpaceOptions,SymbolItemOptions,SuffixImageIconOptions,IconGroupSuffix,IconItemOptions,ChipItemStyle,ChipGroupItemOptions,ChipGroup,IconOptions } from '@kit.ArkUI';
```

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

Chip背景颜色。 默认值：$r('sys.color.ohos_id_color_button_normal') 为undefined时，backgroundColor走默认值。

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size?: ChipSize | SizeOptions
```

Chip尺寸，使用时需要从Chip组件引入ChipSize类型。 默认值：ChipSize.NORMAL或{ height: 0, width: 0 } 为undefined时，使用默认值。

**Type:** ChipSize | SizeOptions

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedFontColor

```TypeScript
selectedFontColor?: ResourceColor
```

Chip激活时的文字颜色。 默认值：$r('sys.color.ohos_id_color_text_primary_contrary') 为undefined时，selectedFontColor走默认值。

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor?: ResourceColor
```

Chip激活时的背景颜色。 默认值：$r('sys.color.ohos_id_color_emphasize') 为undefined时，selectedBackgroundColor走默认值。

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Chip文字颜色。 默认值：$r('sys.color.ohos_id_color_text_primary') 为undefined时，fontColor走默认值。

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

