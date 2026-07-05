# ExpandedRegionLayoutOptions

展开态布局信息。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## verticalSplitRatio

```TypeScript
verticalSplitRatio?: number
```

主要区域与次要区域之间的高度比例。 默认值：[PresetSplitRatio](../../apis-arkui/arkts-apis/arkts-presetsplitratio-e.md#PresetSplitRatio).LAYOUT_1V1

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## horizontalSplitRatio

```TypeScript
horizontalSplitRatio?: number
```

主要区域与扩展区域之间的宽度比例。此字段在extra有效时生效。 默认值：[PresetSplitRatio](../../apis-arkui/arkts-apis/arkts-presetsplitratio-e.md#PresetSplitRatio).LAYOUT_3V2

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## extraRegionPosition

```TypeScript
extraRegionPosition?: ExtraRegionPosition
```

扩展区域的位置信息。当isExtraRegionPerpendicular设置为false时，此字段生效。 默认值：ExtraRegionPosition.top

**Type:** ExtraRegionPosition

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isExtraRegionPerpendicular

```TypeScript
isExtraRegionPerpendicular?: boolean
```

设置为true时，扩展区域从上到下贯穿整个组件；设置为false时，扩展区域不贯穿整个组件。此字段仅在extra有效时生效。 默认值：true

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

