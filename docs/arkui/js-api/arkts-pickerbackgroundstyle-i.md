# PickerBackgroundStyle

选择器选中项的背景样式，包括选中项的背景颜色和边框圆角半径。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadius

```TypeScript
borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses
```

选中项的边框圆角半径。 默认值：{ value: 24, unit: LengthUnit.VP }，即四个圆角半径均为24VP。 **说明：** 1. [LengthMetrics]../../../arkui/Graphics:LengthMetrics类型的value参数同时作用于四个圆角半径大小， unit参数用于设置单位。 2. [BorderRadiuses]BorderRadiuses类型可以设置四个不同值的圆角半径，所有单位固定为VP。 3. [LocalizedBorderRadiuses]LocalizedBorderRadiuses类型可以设置四个不同值的圆角半径， 并且可以单独设置每个圆角的单位。

**Type:** LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color?: ResourceColor
```

选中项的背景颜色。 默认值：'sys.color.comp_background_tertiary'

**Type:** ResourceColor

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

