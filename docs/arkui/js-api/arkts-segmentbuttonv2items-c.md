# SegmentButtonV2Items

分段按钮选项集合。 继承自 Array\<[SegmentButtonV2Item](arkts-segmentbuttonv2items-c.md#SegmentButtonV2Items)>

**Inheritance:** SegmentButtonV2Itemsextends: Array<SegmentButtonV2Item>.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OnSelectedIndexesChange,TabSegmentButtonV2,SegmentButtonV2Items,MultiCapsuleSegmentButtonV2,OnSelectedIndexChange,SegmentButtonV2ItemOptions,SegmentButtonV2Item,CapsuleSegmentButtonV2 } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(items: SegmentButtonV2ItemOptions[])
```

构造函数。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | SegmentButtonV2ItemOptions[] | Yes | 分段按钮选项配置参数集合。 |

## hasHybrid

```TypeScript
get hasHybrid(): boolean
```

是否支持图文混合选项。

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

