# ChipV2SuffixSymbolIcon

定义Symbol类型后缀图标。

**Inheritance:** ChipV2SuffixSymbolIconextends: ChipV2SymbolIcon.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipV2SuffixSymbolIconConfig,ChipV2Label,ChipV2PrefixSymbolIconConfig,IChipV2OptionsConfig,ChipV2SymbolIcon,ChipV2SuffixImageIconConfig,ChipV2LocalizedLabelMarginConfig,ChipV2SymbolIconConfig,ChipV2LabelConfig,ChipV2SuffixSymbolIcon,ChipV2AccessibilityConfig,ChipV2Icon,ChipV2Size,ChipV2CloseConfig,ChipV2SuffixImageIcon,ChipV2Accessibility,ChipV2Options,ChipV2ImageIconConfig,ChipV2ImageIcon,ChipV2PrefixImageIcon,ChipV2LabelMarginConfig,ChipV2PrefixSymbolIcon,ChipV2,ChipV2CloseIcon,ChipV2PrefixImageIconConfig,ChipV2AccessibilitySelectedType } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(config: ChipV2SuffixSymbolIconConfig)
```

ChipV2SuffixSymbolIcon的构造函数

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ChipV2SuffixSymbolIconConfig | Yes | 后缀符号配置 |

## activatedAccessibility

```TypeScript
public activatedAccessibility?: ChipV2Accessibility
```

为后缀符号设置激活的无障碍配置。

**Type:** ChipV2Accessibility

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## normalAccessibility

```TypeScript
public normalAccessibility?: ChipV2Accessibility
```

为后缀符号设置正常的无障碍配置。

**Type:** ChipV2Accessibility

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
public action?: VoidCallback
```

在单击后缀符号时调用。

**Type:** VoidCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

