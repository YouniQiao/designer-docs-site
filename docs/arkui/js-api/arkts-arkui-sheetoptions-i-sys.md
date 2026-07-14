# SheetOptions

Optional attributes of the sheet. Inherits from [BindOptions](arkts-arkui-bindoptions-i.md).

**Inheritance/Implementation:** SheetOptions extends [BindOptions](arkts-arkui-bindoptions-i.md)

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## blurSnapshot

```TypeScript
blurSnapshot?: BlurSnapshotOptions
```

Options for blur snapshot optimization of the sheet. When this property is set, blur optimization is enabled and the sheet background will be rendered using a blur snapshot. This property cannot be dynamically switched after the sheet is presented.

**Type:** BlurSnapshotOptions

**Default:** undefined

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## edgeLightMode

```TypeScript
edgeLightMode?: EdgeLightMode
```

Edge light animation mode of the sheet. Default value: EdgeLightMode.EDGELIGHT_DISABLED .

**Type:** EdgeLightMode

**Default:** EdgeLightMode.EDGELIGHT_DISABLED

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## offset

```TypeScript
offset?: Position
```

Offset of the sheet. Bottom spacing, which is effective only when the sheet is a bottom sheet. The **detents** property of [SheetOptions](arkts-arkui-sheetoptions-i.md) is not supported. This property has no effect when the y-axis value is set to a negative number. Default value: 0 vp for both the x-axis and y-axis

**Type:** Position

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

