# ChipV2Accessibility

定义ChipV2无障碍

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipV2SuffixSymbolIconConfig,ChipV2Label,ChipV2PrefixSymbolIconConfig,IChipV2OptionsConfig,ChipV2SymbolIcon,ChipV2SuffixImageIconConfig,ChipV2LocalizedLabelMarginConfig,ChipV2SymbolIconConfig,ChipV2LabelConfig,ChipV2SuffixSymbolIcon,ChipV2AccessibilityConfig,ChipV2Icon,ChipV2Size,ChipV2CloseConfig,ChipV2SuffixImageIcon,ChipV2Accessibility,ChipV2Options,ChipV2ImageIconConfig,ChipV2ImageIcon,ChipV2PrefixImageIcon,ChipV2LabelMarginConfig,ChipV2PrefixSymbolIcon,ChipV2,ChipV2CloseIcon,ChipV2PrefixImageIconConfig,ChipV2AccessibilitySelectedType } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(config: ChipV2AccessibilityConfig)
```

ChipV2Accessibility的构造函数

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ChipV2AccessibilityConfig | Yes | 无障碍配置 |

## accessibilityLevel

```TypeScript
public accessibilityLevel?: string
```

设置可访问级别。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
public accessibilityText?: ResourceStr
```

设置辅助功能文本。

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDescription

```TypeScript
public accessibilityDescription?: ResourceStr
```

设置辅助功能描述。

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

