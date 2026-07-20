# IChipV2OptionsConfig

Defines ChipV2 options interface.

**Since:** 26.0.0

<!--Device-unnamed-export interface IChipV2OptionsConfig--><!--Device-unnamed-export interface IChipV2OptionsConfig-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipV2SuffixSymbolIconConfig, ChipV2Label, ChipV2PrefixSymbolIconConfig, IChipV2OptionsConfig, ChipV2SymbolIcon, ChipV2SuffixImageIconConfig, ChipV2LocalizedLabelMarginConfig, ChipV2SymbolIconConfig, ChipV2LabelConfig, ChipV2SuffixSymbolIcon, ChipV2AccessibilityConfig, ChipV2Icon, ChipV2Size, ChipV2CloseConfig, ChipV2SuffixImageIcon, ChipV2Accessibility, ChipV2Options, ChipV2ImageIconConfig, ChipV2ImageIcon, ChipV2PrefixImageIcon, ChipV2LabelMarginConfig, ChipV2PrefixSymbolIcon, ChipV2, ChipV2CloseIcon, ChipV2PrefixImageIconConfig, ChipV2AccessibilitySelectedType } from '@kit.ArkUI';
```

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

Set accessibility description for Chip.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-accessibilityDescription?: ResourceStr--><!--Device-IChipV2OptionsConfig-accessibilityDescription?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

Set accessibility level for Chip.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-accessibilityLevel?: string--><!--Device-IChipV2OptionsConfig-accessibilityLevel?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilitySelectedType

```TypeScript
accessibilitySelectedType?: ChipV2AccessibilitySelectedType
```

Set accessibility selected type for Chip.

**Type:** ChipV2AccessibilitySelectedType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-accessibilitySelectedType?: ChipV2AccessibilitySelectedType--><!--Device-IChipV2OptionsConfig-accessibilitySelectedType?: ChipV2AccessibilitySelectedType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activated

```TypeScript
activated?: boolean
```

Set whether chip is active or not.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-activated?: boolean--><!--Device-IChipV2OptionsConfig-activated?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activatedBackgroundColor

```TypeScript
activatedBackgroundColor?: ColorMetrics
```

Chip background color when chip is activated.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-activatedBackgroundColor?: ColorMetrics--><!--Device-IChipV2OptionsConfig-activatedBackgroundColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activatedBackgroundSystemMaterial

```TypeScript
activatedBackgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component which is activated. Different materials have different effects,which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-activatedBackgroundSystemMaterial?: uiMaterial.Material--><!--Device-IChipV2OptionsConfig-activatedBackgroundSystemMaterial?: uiMaterial.Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowClose

```TypeScript
allowClose?: boolean
```

Show close icon.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-allowClose?: boolean--><!--Device-IChipV2OptionsConfig-allowClose?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ColorMetrics
```

Chip background color.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-backgroundColor?: ColorMetrics--><!--Device-IChipV2OptionsConfig-backgroundColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundSystemMaterial

```TypeScript
backgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component. Different materials have different effects, which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-backgroundSystemMaterial?: uiMaterial.Material--><!--Device-IChipV2OptionsConfig-backgroundSystemMaterial?: uiMaterial.Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadius

```TypeScript
borderRadius?: LengthMetrics
```

Chip radius.

**Type:** LengthMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-borderRadius?: LengthMetrics--><!--Device-IChipV2OptionsConfig-borderRadius?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeIcon

```TypeScript
closeIcon?: ChipV2CloseIcon
```

Set config for default close icon when 'allowClose' is true.

**Type:** ChipV2CloseIcon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-closeIcon?: ChipV2CloseIcon--><!--Device-IChipV2OptionsConfig-closeIcon?: ChipV2CloseIcon-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: Direction
```

Indicates the attribute of the current chip direction.

**Type:** Direction

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-direction?: Direction--><!--Device-IChipV2OptionsConfig-direction?: Direction-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enabled

```TypeScript
enabled?: boolean
```

Enable chip.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-enabled?: boolean--><!--Device-IChipV2OptionsConfig-enabled?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: LengthMetrics
```

Set font size for the label text and the close icon.

**Type:** LengthMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-fontSize?: LengthMetrics--><!--Device-IChipV2OptionsConfig-fontSize?: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
label: ChipV2Label
```

Chip label.

**Type:** ChipV2Label

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-label: ChipV2Label--><!--Device-IChipV2OptionsConfig-label: ChipV2Label-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxFontScale

```TypeScript
maxFontScale?: number | Resource
```

Maximum font scale for Chip.

**Type:** number | Resource

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-maxFontScale?: number | Resource--><!--Device-IChipV2OptionsConfig-maxFontScale?: number | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## minFontScale

```TypeScript
minFontScale?: number | Resource
```

Minimum font scale for Chip.

**Type:** number | Resource

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-minFontScale?: number | Resource--><!--Device-IChipV2OptionsConfig-minFontScale?: number | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onClicked

```TypeScript
onClicked?: Callback<void>
```

On clicked action.

**Type:** Callback<void>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-onClicked?: Callback<void>--><!--Device-IChipV2OptionsConfig-onClicked?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onClose

```TypeScript
onClose?: VoidCallback
```

On close action.

**Type:** VoidCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-onClose?: VoidCallback--><!--Device-IChipV2OptionsConfig-onClose?: VoidCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## padding

```TypeScript
padding?: LocalizedPadding
```

Chip padding.

**Type:** LocalizedPadding

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-padding?: LocalizedPadding--><!--Device-IChipV2OptionsConfig-padding?: LocalizedPadding-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## prefixIcon

```TypeScript
prefixIcon?: ChipV2Icon
```

Chip prefix icon.

**Type:** ChipV2Icon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-prefixIcon?: ChipV2Icon--><!--Device-IChipV2OptionsConfig-prefixIcon?: ChipV2Icon-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size?: ChipV2Size | SizeT<LengthMetrics>
```

Chip size.

**Type:** ChipV2Size | SizeT<LengthMetrics>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-size?: ChipV2Size | SizeT<LengthMetrics>--><!--Device-IChipV2OptionsConfig-size?: ChipV2Size | SizeT<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## suffixIcon

```TypeScript
suffixIcon?: ChipV2Icon
```

Chip suffix icon.

**Type:** ChipV2Icon

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-IChipV2OptionsConfig-suffixIcon?: ChipV2Icon--><!--Device-IChipV2OptionsConfig-suffixIcon?: ChipV2Icon-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

