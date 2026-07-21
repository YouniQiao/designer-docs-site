# ChipGroupV2ItemStyle

Defines ChipGroupV2 item style.

**Since:** 26.0.0

**Decorator:** @ObservedV2

<!--Device-unnamed-export declare class ChipGroupV2ItemStyle--><!--Device-unnamed-export declare class ChipGroupV2ItemStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig, ChipGroupV2ItemStyleConfig, ChipGroupV2SpaceConfig, ChipGroupV2IconGroupSuffix, ChipGroupV2Items, ChipGroupV2Padding, ChipGroupV2Item, ChipGroupV2ItemStyle, ChipGroupV2, ChipGroupV2PaddingConfig, ChipGroupV2IconItemConfig, ChipGroupV2SymbolItemConfig, ChipGroupV2Space } from '@kit.ArkUI';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(config: ChipGroupV2ItemStyleConfig)
```

The constructor of ChipGroupV2ItemStyle

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2ItemStyle-constructor(config: ChipGroupV2ItemStyleConfig)--><!--Device-ChipGroupV2ItemStyle-constructor(config: ChipGroupV2ItemStyleConfig)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [ChipGroupV2ItemStyleConfig](arkts-arkui-arkui-advanced-chipgroupv2-chipgroupv2itemstyleconfig-i.md) | Yes | config of ChipGroupV2ItemStyle |

## backgroundColor

```TypeScript
public backgroundColor?: ColorMetrics
```

ChipV2 item background color.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2ItemStyle-public backgroundColor?: ColorMetrics--><!--Device-ChipGroupV2ItemStyle-public backgroundColor?: ColorMetrics-End-->

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

<!--Device-ChipGroupV2ItemStyle-public backgroundSystemMaterial?: uiMaterial.Material--><!--Device-ChipGroupV2ItemStyle-public backgroundSystemMaterial?: uiMaterial.Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
public fontColor?: ColorMetrics
```

Text font color.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2ItemStyle-public fontColor?: ColorMetrics--><!--Device-ChipGroupV2ItemStyle-public fontColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundColor

```TypeScript
public selectedBackgroundColor?: ColorMetrics
```

Selected chip item background color.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2ItemStyle-public selectedBackgroundColor?: ColorMetrics--><!--Device-ChipGroupV2ItemStyle-public selectedBackgroundColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundSystemMaterial

```TypeScript
public selectedBackgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component when selected. Different materials have different effects,which can influence the backgroundColor, border, shadow, and other visual attributes of the component.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2ItemStyle-public selectedBackgroundSystemMaterial?: uiMaterial.Material--><!--Device-ChipGroupV2ItemStyle-public selectedBackgroundSystemMaterial?: uiMaterial.Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedFontColor

```TypeScript
public selectedFontColor?: ColorMetrics
```

Selected Text font color.

**Type:** ColorMetrics

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2ItemStyle-public selectedFontColor?: ColorMetrics--><!--Device-ChipGroupV2ItemStyle-public selectedFontColor?: ColorMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
public size?: ChipV2Size | SizeT<LengthMetrics>
```

ChipV2 size.

**Type:** ChipV2Size \| SizeT&lt;LengthMetrics&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChipGroupV2ItemStyle-public size?: ChipV2Size | SizeT<LengthMetrics>--><!--Device-ChipGroupV2ItemStyle-public size?: ChipV2Size | SizeT<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

