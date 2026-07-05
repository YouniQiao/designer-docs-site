# ChipGroupV2Item

ChipGroupV2Item定义了芯片组中单个芯片项。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig,ChipGroupV2ItemStyleConfig,ChipGroupV2SpaceConfig,ChipGroupV2IconGroupSuffix,ChipGroupV2Items,ChipGroupV2Padding,ChipGroupV2Item,ChipGroupV2ItemStyle,ChipGroupV2,ChipGroupV2PaddingConfig,ChipGroupV2IconItemConfig,ChipGroupV2SymbolItemConfig,ChipGroupV2Space } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(config: ChipGroupV2ItemConfig)
```

ChipGroupV2Item的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ChipGroupV2ItemConfig | Yes | 芯片组项配置。 |

## prefixSymbolIcon

```TypeScript
public prefixSymbolIcon?: ChipV2PrefixSymbolIcon
```

前缀Symbol图标属性。 默认值：没有前缀Symbol图标。 值为undefined时，按默认值处理。

**Type:** ChipV2PrefixSymbolIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowClose

```TypeScript
public allowClose?: boolean
```

删除图标是否显示。当传入suffixIcon参数时，allowClose不生效；未传入suffixIcon参数时，allowClose决定是否显示移除图标。 true表示删除图标显示，false表示删除图标不显示。 默认值：false 值为undefined时，按默认值处理。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixIcon

```TypeScript
public suffixIcon?: ChipV2SuffixImageIcon
```

后缀图标属性。 默认值：不显示后缀Image图标。 值为undefined时，按默认值处理。

**Type:** ChipV2SuffixImageIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeIcon

```TypeScript
public closeIcon?: ChipV2CloseConfig
```

关闭图标的配置，包括无障碍属性配置。 默认值： - 尺寸默认值：size为ChipV2Size.SMALL时，默认值为`$r('sys.float.chip_small_font_size')`；其他情况默认值为 `$r('sys.float.chip_normal_font_size')`。 - 无障碍默认值：无无障碍描述。 值为undefined时，按默认值处理。

**Type:** ChipV2CloseConfig

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixSymbolIcon

```TypeScript
public suffixSymbolIcon?: ChipV2SuffixSymbolIcon
```

后缀Symbol图标属性。 默认值：不显示后缀Symbol图标。 值为undefined时，按默认值处理。

**Type:** ChipV2SuffixSymbolIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
public accessibilityLevel?: string
```

无障碍重要性。用于控制组件是否可被无障碍辅助服务所识别。 支持的值为： "auto"：当前组件会转化为"yes"。 "yes"：当前组件可被无障碍辅助服务所识别。 "no"：当前组件不可被无障碍辅助服务所识别。 "no-hide-descendants"：当前组件及其所有子组件不可被无障碍辅助服务所识别。 默认值："auto" 值为undefined时，按默认值处理。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
public label: ChipV2Label
```

ChipV2文本属性。

**Type:** ChipV2Label

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## prefixIcon

```TypeScript
public prefixIcon?: ChipV2PrefixImageIcon
```

前缀图标属性。 默认值：没有前缀Image图标。 值为undefined时，按默认值处理。

**Type:** ChipV2PrefixImageIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
public accessibilityDescription?: ResourceStr
```

无障碍描述。此描述用于向用户详细解释当前组件，开发人员应为组件的这一属性提供较为详尽的文本说明，以协助用户理解即将执行的操作及其可能产生的结果。特别是当这些结果无法仅从组件的属性和无障碍文本中直接获知时。如果组件同时具备文本属 性和无障碍说明属性，当组件被选中时，系统将首先播报组件的文本属性，随后播报无障碍说明属性的内容。 默认值：空字符串。 值为undefined时，按默认值处理。

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

