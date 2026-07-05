# ChipGroupV2SpaceConfig

ChipGroupV2SpaceConfig定义了ChipGroupV2左右内边距，以及Chip与Chip之间的间距配置。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig,ChipGroupV2ItemStyleConfig,ChipGroupV2SpaceConfig,ChipGroupV2IconGroupSuffix,ChipGroupV2Items,ChipGroupV2Padding,ChipGroupV2Item,ChipGroupV2ItemStyle,ChipGroupV2,ChipGroupV2PaddingConfig,ChipGroupV2IconItemConfig,ChipGroupV2SymbolItemConfig,ChipGroupV2Space } from '@kit.ArkUI';
```

## startSpace

```TypeScript
startSpace?: Length
```

左侧内边距（不支持百分比）。 默认值：16 单位：vp 值为undefined时，按默认值处理。

**Type:** Length

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endSpace

```TypeScript
endSpace?: Length
```

右侧内边距（不支持百分比）。 默认值：16 单位：vp 值为undefined时，按默认值处理。

**Type:** Length

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSpace

```TypeScript
itemSpace?: string | number
```

ChipV2与ChipV2之间的间距（不支持百分比）。 取值范围： - number类型：[0, +∞)，如0、8、16、24.5。 - string类型：单位为fp|vp|px|lpx且数值部分大于等于0的字符串，如"8vp"、"16fp"、"12px"、"10lpx"。 - 不支持：负数、百分比单位、无效字符串格式。 默认值：8 单位：vp 值为undefined时，按默认值处理。

**Type:** string | number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

