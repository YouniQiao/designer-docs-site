# SegmentButtonItemOptionsConstructorOptions

构造参数用于SegmentButtonItemOptions。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions,SegmentButtonItemOptionsConstructorOptions,SegmentButtonIconTextItem,SegmentButtonItemOptions,SegmentButtonTextItem,CapsuleSegmentButtonOptions,SegmentButtonOptions,CapsuleSegmentButtonConstructionOptions,SegmentButtonItemTuple,SegmentButton,SegmentButtonItemArray,SegmentButtonItemOptionsArray,SegmentButtonIconItem,BorderRadiusMode,TabSegmentButtonConstructionOptions,TabSegmentButtonOptions,ItemRestriction,DimensionNoPercentage } from '@kit.ArkUI';
```

## selectedIcon

```TypeScript
selectedIcon?: ResourceStr
```

选中态的按钮图标。 值为undefined时，不显示图标。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon?: ResourceStr
```

未选中态的按钮图标。 值为undefined时，不显示图标。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

无障碍重要性，控制当前组件是否可被无障碍辅助服务识别。 支持的值为: "auto"：当前组件可被无障碍辅助服务所识别。 "yes"：当前组件可被无障碍辅助服务所识别。 "no"：当前组件不可被无障碍辅助服务所识别。 "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。 默认值："auto" 值为undefined时，按默认值处理。

**Type:** string

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## text

```TypeScript
text?: ResourceStr
```

按钮文本。 值为undefined时，不显示文本内容。

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedIconAccessibilityText

```TypeScript
selectedIconAccessibilityText?: ResourceStr
```

选中态按钮图标的无障碍文本。 默认值：空字符串。 值为undefined时，按默认值处理。

**Type:** ResourceStr

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## iconAccessibilityText

```TypeScript
iconAccessibilityText?: ResourceStr
```

未选中态按钮图标的无障碍文本。 默认值：空字符串。 值为undefined时，按默认值处理。

**Type:** ResourceStr

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

无障碍说明，为用户解释组件操作，设置详细解释文本，帮助用户理解操作后果。若组件有文本和无障碍说明，选中时先播报文本，再播报无障碍说明。 默认值：空字符串。 值为undefined时，按默认值处理。

**Type:** ResourceStr

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

