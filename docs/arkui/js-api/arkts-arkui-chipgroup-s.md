# ChipGroup

> **NOTE** > > 1. When **multiple** is set to **false**, if **selectedIndexes** is not passed in, the first chip is automatically > selected by default. However, if the provided **selectedIndexes** includes multiple elements, the chip at the first > index is selected by default. > > 2. To use the suffix functionality, the **IconGroupSuffix** API must be imported. If this API is not provided, the > suffix area will remain empty. > > 3. The icon fill colors (**fillColor** and **activedFillColor**) must match the font color (**fontColor**). If > different colors need to be set, use **prefixSymbol** when passing in > [ChipGroupSpaceOptions](arkts-arkui-chipgroupspaceoptions-i.md).

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipItemLabelOptions, ChipGroupSpaceOptions, SymbolItemOptions, SuffixImageIconOptions, IconGroupSuffix, IconItemOptions, ChipItemStyle, ChipGroupItemOptions, ChipGroup, IconOptions } from '@kit.ArkUI';
```

## backgroundSystemMaterial

```TypeScript
backgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component. Different materials have different effects, which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## chipGroupPadding

```TypeScript
chipGroupPadding?: ChipGroupPaddingOptions
```

Top and bottom padding, used to control the overall height. The type is [ChipGroupPaddingOptions](arkts-arkui-chipgrouppaddingoptions-i.md). Default value: { top: 14, bottom: 14 } Unit: vp If the value is **undefined**, the default value is used.

**Type:** ChipGroupPaddingOptions

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## chipGroupSpace

```TypeScript
chipGroupSpace?: ChipGroupSpaceOptions
```

Left and right padding and spacing between chips. For details, see [ChipGroupSpaceOptions](arkts-arkui-chipgroupspaceoptions-i.md). Default value: { itemSpace: 8, startSpace: 16, endSpace: 16 } Unit: vp If the value is **undefined**, the default value is used.

**Type:** ChipGroupSpaceOptions

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemStyle

```TypeScript
itemStyle?: ChipItemStyle
```

Style attributes of the chip, such as the color and size. For details, see [ChipItemStyle](arkts-arkui-chipitemstyle-i.md). Default value: { size: ChipSize.NORMAL, backgroundColor: $r('sys.color.ohos_id_color_button_normal'), fontColor: $r(' sys.color.ohos_id_color_text_primary'), selectedFontColor: $r('sys.color.ohos_id_color_text_primary_contrary'), selectedBackgroundColor: $r('sys.color.ohos_id_color_emphasize') } If the value is **undefined**, the default value is used.

**Type:** ChipItemStyle

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## items

```TypeScript
items: ChipGroupItemOptions[]
```

Specific attributes of each chip. For details, see [ChipGroupItemOptions[]]{@link ChipGroupItemOptions}. If the value is **undefined**, the **ChipGroup** component is empty by default.

**Type:** ChipGroupItemOptions[]

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## multiple

```TypeScript
multiple?: boolean
```

Whether to select multiple chips. **true**: Multiple chips can be selected. **false**: Only one chip can be selected. Default value: **false** If the value is **undefined**, the default value is used.

**Type:** boolean

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: Callback<Array<number>>
```

Callback invoked when the chip status changes. If the value is **undefined**, the event is unbound.

**Type:** Callback<Array<number>>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundSystemMaterial

```TypeScript
selectedBackgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component when selected. Different materials have different effects, which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIndexes

```TypeScript
selectedIndexes?: Array<number>
```

Index of the selected chip. Default value: **[0]** If the value is **undefined**, the default value is used.

**Type:** Array<number>

**Since:** 12

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffix

```TypeScript
suffix?: Callback<void>
```

Callback used to customize a builder. To display custom content on the rightmost side of the component, configure the **suffix** property. Use of the **suffix** property requires referencing the [IconGroupSuffix](arkts-arkui-icongroupsuffix-s.md) API. By default, if this parameter is not passed, there is no suffix. If the value is **undefined**, there is no suffix.

**Type:** Callback<void>

**Since:** 12

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

