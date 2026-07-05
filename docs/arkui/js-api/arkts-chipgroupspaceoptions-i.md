# ChipGroupSpaceOptions

ChipGroupSpaceOptions 定义了ChipGroup左右内边距，以及Chip与Chip之间的间距。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipItemLabelOptions,ChipGroupSpaceOptions,SymbolItemOptions,SuffixImageIconOptions,IconGroupSuffix,IconItemOptions,ChipItemStyle,ChipGroupItemOptions,ChipGroup,IconOptions } from '@kit.ArkUI';
```

## startSpace

```TypeScript
startSpace?: Length
```

左侧内边距（不支持百分比）。 默认值：16 单位：vp 为undefined时，startSpace取默认值。

**Type:** Length

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endSpace

```TypeScript
endSpace?: Length
```

右侧内边距（不支持百分比）。 默认值：16 单位：vp 如果为undefined，则使用默认值。

**Type:** Length

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemSpace

```TypeScript
itemSpace?: string | number
```

Chip与Chip之间的间距（不支持百分比）。 取值范围： number类型: ≥ 0 的数值（如：0、8、16、24.5）。 string类型: 单位为fp|vp|px|lpx且数值部分 ≥ 0 的字符串（如："8vp"、"16fp"、"12px"、"10lpx"）。 不支持: 负数、百分比单位、无效字符串格式。 默认值：8 单位：vp 为undefined时，itemSpace采取默认值。

**Type:** string | number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

