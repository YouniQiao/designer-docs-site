# ChipGroupV2Items

ChipGroupV2Items定义了芯片组项的数组类，继承自Array<[ChipGroupV2Item](arkts-chipgroupv2item-c.md#ChipGroupV2Item)>。

**Inheritance:** ChipGroupV2Itemsextends: Array<ChipGroupV2Item>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig,ChipGroupV2ItemStyleConfig,ChipGroupV2SpaceConfig,ChipGroupV2IconGroupSuffix,ChipGroupV2Items,ChipGroupV2Padding,ChipGroupV2Item,ChipGroupV2ItemStyle,ChipGroupV2,ChipGroupV2PaddingConfig,ChipGroupV2IconItemConfig,ChipGroupV2SymbolItemConfig,ChipGroupV2Space } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(items: ChipGroupV2ItemConfig[])
```

ChipGroupV2Items的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | ChipGroupV2ItemConfig[] | Yes | 芯片组项配置数组。 |

