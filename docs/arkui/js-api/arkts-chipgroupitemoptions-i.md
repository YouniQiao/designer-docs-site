# ChipGroupItemOptions

ChipGroupItemOptions定义每个Chip的非通用属性。 > **说明：** > > 当传入`suffixIcon`参数时，`allowClose`不生效；未传入`suffixIcon`参数时，`allowClose`决定是否显示移除图标。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipItemLabelOptions,ChipGroupSpaceOptions,SymbolItemOptions,SuffixImageIconOptions,IconGroupSuffix,IconItemOptions,ChipItemStyle,ChipGroupItemOptions,ChipGroup,IconOptions } from '@kit.ArkUI';
```

## suffixSymbol

```TypeScript
suffixSymbol?: ChipSymbolGlyphOptions
```

后缀SymbolGlyph图标属性。 默认值：不显示后缀SymbolGlyph图标。 值为undefined时，按默认值处理。

**Type:** ChipSymbolGlyphOptions

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowClose

```TypeScript
allowClose?: boolean
```

删除图标是否显示。 false表示删除图标不显示，true表示删除图标显示。 默认值：false 值为undefined时，按默认值处理。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixSymbolOptions

```TypeScript
suffixSymbolOptions?: ChipSuffixSymbolGlyphOptions
```

后缀Symbol图标属性。 默认值：后缀Symbol图标无功能。 值为undefined时，按默认值处理。

**Type:** ChipSuffixSymbolGlyphOptions

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixIcon

```TypeScript
suffixIcon?: IconOptions
```

后缀Image图标属性。 默认值：不显示后缀Image图标。 值为undefined时，按默认值处理。

**Type:** IconOptions

**Since:** 12

**Deprecated since:** 14

**Substitute:** ChipGroupItemOptions#suffixImageIcon

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixImageIcon

```TypeScript
suffixImageIcon?: SuffixImageIconOptions
```

后缀Image图标属性。 默认值：不显示后缀Image图标。 值为undefined时，按默认值处理。

**Type:** SuffixImageIconOptions

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## prefixSymbol

```TypeScript
prefixSymbol?: ChipSymbolGlyphOptions
```

前缀SymbolGlyph图标属性。 默认值：没有前缀SymbolGlyph图标。 值为undefined时，按默认值处理。

**Type:** ChipSymbolGlyphOptions

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

ChipGroup中Chip项无障碍重要性。用于控制ChipGroup中Chip项是否可被无障碍辅助服务所识别。 支持的值为: "auto"：ChipGroup中Chip项会转换为“yes”。 "yes"：ChipGroup中Chip项可被无障碍辅助服务所识别。 "no"：ChipGroup中Chip项不可被无障碍辅助服务所识别。 "no-hide-descendants"：ChipGroup中Chip项及其所有子组件不可被无障碍辅助服务所识别。 默认值："auto" 值为undefined时，按默认值处理。

**Type:** string

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
label: LabelOptions
```

文本属性。

**Type:** LabelOptions

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeOptions

```TypeScript
closeOptions?: CloseOptions
```

默认删除图标的无障碍朗读功能属性。 值为undefined时，按默认值处理。

**Type:** CloseOptions

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## prefixIcon

```TypeScript
prefixIcon?: IconOptions
```

前缀Image图标属性。 默认值：没有前缀Image图标。 值为undefined时，按默认值处理。

**Type:** IconOptions

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

ChipGroup中Chip项的无障碍描述。此描述用于向用户详细解释ChipGroup中Chip项，开发人员应为ChipGroup中Chip项的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果。特别是 当这些结果无法仅从ChipGroup中Chip项的属性和无障碍文本中直接获知时。如果ChipGroup中Chip项同时具备文本属性和无障碍说明属性，当ChipGroup中Chip项被选中时，系统将首先播报ChipGroup中 Chip项的文本属性，随后播报无障碍说明属性的内容。 默认值：空字符串。 值为undefined时，按默认值处理。

**Type:** ResourceStr

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

