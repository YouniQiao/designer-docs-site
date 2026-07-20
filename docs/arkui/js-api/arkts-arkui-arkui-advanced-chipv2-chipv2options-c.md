# ChipV2Options

Defines chip options class.

**Since:** 26.0.0

<!--Device-unnamed-export class ChipV2Options--><!--Device-unnamed-export class ChipV2Options-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipV2SuffixSymbolIconConfig, ChipV2Label, ChipV2PrefixSymbolIconConfig, IChipV2OptionsConfig, ChipV2SymbolIcon, ChipV2SuffixImageIconConfig, ChipV2LocalizedLabelMarginConfig, ChipV2SymbolIconConfig, ChipV2LabelConfig, ChipV2SuffixSymbolIcon, ChipV2AccessibilityConfig, ChipV2Icon, ChipV2Size, ChipV2CloseConfig, ChipV2SuffixImageIcon, ChipV2Accessibility, ChipV2Options, ChipV2ImageIconConfig, ChipV2ImageIcon, ChipV2PrefixImageIcon, ChipV2LabelMarginConfig, ChipV2PrefixSymbolIcon, ChipV2, ChipV2CloseIcon, ChipV2PrefixImageIconConfig, ChipV2AccessibilitySelectedType } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(config: IChipV2OptionsConfig)
```

The constructor of ChipV2Options

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-constructor(config: IChipV2OptionsConfig)--><!--Device-ChipV2Options-constructor(config: IChipV2OptionsConfig)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [IChipV2OptionsConfig](arkts-arkui-arkui-advanced-chipv2-ichipv2optionsconfig-i.md) | Yes | config of the ChipV2Options |

## accessibilityDescription

```TypeScript
public accessibilityDescription?: ResourceStr
```

Set accessibility description for Chip.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public accessibilityDescription?: ResourceStr--><!--Device-ChipV2Options-public accessibilityDescription?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
public accessibilityLevel?: string
```

Set accessibility level for Chip.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public accessibilityLevel?: string--><!--Device-ChipV2Options-public accessibilityLevel?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilitySelectedType

```TypeScript
public accessibilitySelectedType?: ChipV2AccessibilitySelectedType
```

Sets the accessibility selection type for the chip.

**Type:** ChipV2AccessibilitySelectedType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public accessibilitySelectedType?: ChipV2AccessibilitySelectedType--><!--Device-ChipV2Options-public accessibilitySelectedType?: ChipV2AccessibilitySelectedType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activated

```TypeScript
public activated?: boolean
```

Set whether chip is active or not.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public activated?: boolean--><!--Device-ChipV2Options-public activated?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activatedBackgroundColor

```TypeScript
public activatedBackgroundColor?: ColorMetrics
```

Chip background color when chip is activated.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public activatedBackgroundColor?: ColorMetrics--><!--Device-ChipV2Options-public activatedBackgroundColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activatedBackgroundSystemMaterial

```TypeScript
public activatedBackgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component which is activated. Different materials have different effects,which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public activatedBackgroundSystemMaterial?: uiMaterial.Material--><!--Device-ChipV2Options-public activatedBackgroundSystemMaterial?: uiMaterial.Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowClose

```TypeScript
public allowClose?: boolean
```

Show close icon.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public allowClose?: boolean--><!--Device-ChipV2Options-public allowClose?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
public backgroundColor?: ColorMetrics
```

Chip background color.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public backgroundColor?: ColorMetrics--><!--Device-ChipV2Options-public backgroundColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundSystemMaterial

```TypeScript
public backgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component. Different materials have different effects, which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public backgroundSystemMaterial?: uiMaterial.Material--><!--Device-ChipV2Options-public backgroundSystemMaterial?: uiMaterial.Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadius

```TypeScript
public borderRadius?: LengthMetrics
```

Chip radius.

**Type:** LengthMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public borderRadius?: LengthMetrics--><!--Device-ChipV2Options-public borderRadius?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeIcon

```TypeScript
public closeIcon?: ChipV2CloseIcon
```

Set config for default close icon when 'allowClose' is true.

**Type:** ChipV2CloseIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public closeIcon?: ChipV2CloseIcon--><!--Device-ChipV2Options-public closeIcon?: ChipV2CloseIcon-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
public direction?: Direction
```

Indicates the attribute of the current chip direction.

**Type:** Direction

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public direction?: Direction--><!--Device-ChipV2Options-public direction?: Direction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enabled

```TypeScript
public enabled?: boolean
```

Enable chip.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public enabled?: boolean--><!--Device-ChipV2Options-public enabled?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
public fontSize?: LengthMetrics
```

Set font size for the label text and the close icon.

**Type:** LengthMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public fontSize?: LengthMetrics--><!--Device-ChipV2Options-public fontSize?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
public label: ChipV2Label
```

Chip prefix icon.

**Type:** ChipV2Label

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public label: ChipV2Label--><!--Device-ChipV2Options-public label: ChipV2Label-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxFontScale

```TypeScript
public maxFontScale?: number | Resource
```

Maximum font scale for Chip.

**Type:** number | Resource

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public maxFontScale?: number | Resource--><!--Device-ChipV2Options-public maxFontScale?: number | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## minFontScale

```TypeScript
public minFontScale?: number | Resource
```

Minimum font scale for Chip.

**Type:** number | Resource

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public minFontScale?: number | Resource--><!--Device-ChipV2Options-public minFontScale?: number | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onClicked

```TypeScript
public onClicked?: Callback<void>
```

On clicked action.

**Type:** Callback<void>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public onClicked?: Callback<void>--><!--Device-ChipV2Options-public onClicked?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onClose

```TypeScript
public onClose?: VoidCallback
```

On close action.

**Type:** VoidCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public onClose?: VoidCallback--><!--Device-ChipV2Options-public onClose?: VoidCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## padding

```TypeScript
public padding?: LocalizedPadding
```

Chip padding.

**Type:** LocalizedPadding

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public padding?: LocalizedPadding--><!--Device-ChipV2Options-public padding?: LocalizedPadding-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## prefixIcon

```TypeScript
public prefixIcon?: ChipV2Icon
```

Chip prefix icon.

**Type:** ChipV2Icon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public prefixIcon?: ChipV2Icon--><!--Device-ChipV2Options-public prefixIcon?: ChipV2Icon-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
public size?: ChipV2Size | SizeT<LengthMetrics>
```

Chip size.

**Type:** ChipV2Size | SizeT<LengthMetrics>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public size?: ChipV2Size | SizeT<LengthMetrics>--><!--Device-ChipV2Options-public size?: ChipV2Size | SizeT<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixIcon

```TypeScript
public suffixIcon?: ChipV2Icon
```

Chip suffix icon.

**Type:** ChipV2Icon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipV2Options-public suffixIcon?: ChipV2Icon--><!--Device-ChipV2Options-public suffixIcon?: ChipV2Icon-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

