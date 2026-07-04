# ChipGroupV2Item

Defines chip group item.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig, ChipGroupV2ItemStyleConfig, ChipGroupV2SpaceConfig, ChipGroupV2IconGroupSuffix, ChipGroupV2Items, ChipGroupV2Padding, ChipGroupV2Item, ChipGroupV2ItemStyle, ChipGroupV2, ChipGroupV2PaddingConfig, ChipGroupV2IconItemConfig, ChipGroupV2SymbolItemConfig, ChipGroupV2Space } from '@ohos.arkui.advanced.ChipGroupV2';
```

## constructor

```TypeScript
constructor(config: ChipGroupV2ItemConfig)
```

The constructor of ChipGroupV2Item

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ChipGroupV2ItemConfig | Yes | config of the chip group item |

## accessibilityDescription

```TypeScript
public accessibilityDescription?: ResourceStr
```

Set accessibility description for ChipGroupV2 item.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
public accessibilityLevel?: string
```

Set accessibility level for ChipGroupV2 item.

**Type:** string

**Default:** auto

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowClose

```TypeScript
public allowClose?: boolean
```

Allow close.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeIcon

```TypeScript
public closeIcon?: ChipV2CloseConfig
```

Set config for default close icon when 'allowClose' is true.

**Type:** ChipV2CloseConfig

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
public label: ChipV2Label
```

Chip label.

**Type:** ChipV2Label

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## prefixIcon

```TypeScript
public prefixIcon?: ChipV2PrefixImageIcon
```

Prefix icon.

**Type:** ChipV2PrefixImageIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## prefixSymbolIcon

```TypeScript
public prefixSymbolIcon?: ChipV2PrefixSymbolIcon
```

Prefix symbol icon.

**Type:** ChipV2PrefixSymbolIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixIcon

```TypeScript
public suffixIcon?: ChipV2SuffixImageIcon
```

Suffix icon.

**Type:** ChipV2SuffixImageIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixSymbolIcon

```TypeScript
public suffixSymbolIcon?: ChipV2SuffixSymbolIcon
```

Suffix symbol icon.

**Type:** ChipV2SuffixSymbolIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

