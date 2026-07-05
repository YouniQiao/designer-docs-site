# HoverModeRegionLayoutOptions

悬停态布局信息。 > **说明：** > > 1.在悬停状态下，设备存在避让区域，布局计算时需考虑该区域的影响。 > > 2.在悬停模式下，屏幕上半部分为显示区域，下半部分为操作区域。

**Since:** 12

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

## showExtraRegion

```TypeScript
showExtraRegion?: boolean
```

可折叠屏幕在半折叠状态下是否显示扩展区域。设置为true时表示显示扩展区域，设置为false时表示不显示扩展区域。 默认值：false

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## extraRegionPosition

```TypeScript
extraRegionPosition?: ExtraRegionPosition
```

扩展区域的位置信息，当且仅当showExtraRegion设置为true时此字段才生效。 默认值：ExtraRegionPosition.top

**Type:** ExtraRegionPosition

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

