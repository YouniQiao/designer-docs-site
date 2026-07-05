# ChipGroupV2Padding

ChipGroupV2Padding定义了ChipGroupV2的上下内边距，用于控制其整体高度。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ChipGroupV2ItemConfig,ChipGroupV2ItemStyleConfig,ChipGroupV2SpaceConfig,ChipGroupV2IconGroupSuffix,ChipGroupV2Items,ChipGroupV2Padding,ChipGroupV2Item,ChipGroupV2ItemStyle,ChipGroupV2,ChipGroupV2PaddingConfig,ChipGroupV2IconItemConfig,ChipGroupV2SymbolItemConfig,ChipGroupV2Space } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(config: ChipGroupV2PaddingConfig)
```

ChipGroupV2Padding的构造函数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ChipGroupV2PaddingConfig | Yes | 芯片组内边距配置。 |

## top

```TypeScript
public top: Length
```

ChipGroupV2的上方内边距（不支持百分比）。 默认值：14 单位：vp 值为undefined时，按默认值处理。

**Type:** Length

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## bottom

```TypeScript
public bottom: Length
```

ChipGroupV2的下方内边距（不支持百分比）。 默认值：14 单位：vp 值为undefined时，按默认值处理。

**Type:** Length

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

