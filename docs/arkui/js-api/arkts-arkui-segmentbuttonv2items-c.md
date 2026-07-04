# SegmentButtonV2Items

Represents items of the **SegmentButtonV2** component. This parameter is inherited from Array\<[SegmentButtonV2Item](arkts-arkui-segmentbuttonv2items-c.md#segmentbuttonv2items)>.

**Inheritance/Implementation:** SegmentButtonV2Items extends [Array<SegmentButtonV2Item>](Array<SegmentButtonV2Item>)

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OnSelectedIndexesChange, TabSegmentButtonV2, SegmentButtonV2Items, MultiCapsuleSegmentButtonV2, OnSelectedIndexChange, SegmentButtonV2ItemOptions, SegmentButtonV2Item, CapsuleSegmentButtonV2 } from '@ohos.arkui.advanced.SegmentButtonV2';
```

## constructor

```TypeScript
constructor(items: SegmentButtonV2ItemOptions[])
```

Constructs a **SegmentButtonV2ItemOptions** instance.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | SegmentButtonV2ItemOptions[] | Yes | Options of the item of the **SegmentButtonV2** component. |

## hasHybrid

```TypeScript
get hasHybrid(): boolean
```

Checks whether the component supports mixed icon and text items.

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

