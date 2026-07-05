# ShadowOptions

阴影属性集合，用于设置阴影的模糊半径、阴影的颜色、X轴和Y轴的偏移量。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offsetX

```TypeScript
offsetX?: number | Resource
```

阴影的X轴偏移量。 默认值：0 单位：px **说明：** 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。 如果offsetX为Resource类型，则传入的值需为number类型。

**Type:** number | Resource

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offsetY

```TypeScript
offsetY?: number | Resource
```

阴影的Y轴偏移量。 默认值：0 单位：px **说明：** 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。 如果offsetY为Resource类型，则传入的值需为number类型。

**Type:** number | Resource

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color?: Color | string | Resource | ColoringStrategy
```

阴影的颜色。 默认为黑色。 **说明：** 从API version 11开始，该接口支持使用ColoringStrategy实现智能取色，智能取色功能不支持在ArkTS卡片、[textShadow]TextAttribute#textShadow中使用。 当前仅支持平均取色和主色取色，智能取色区域为shadow绘制区域。 支持使用'average'字符串触发智能平均取色模式，支持使用'primary'字符串触发智能主色模式。

**Type:** Color | string | Resource | ColoringStrategy

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fill

```TypeScript
fill?: boolean
```

阴影是否内部填充。true表示阴影在内部填充，false表示阴影在外部填充。 默认值：false。 **说明：** [textShadow]TextAttribute#textShadow中该字段不生效。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: ShadowType
```

阴影类型。 默认值：COLOR

**Type:** ShadowType

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## radius

```TypeScript
radius: number | Resource
```

阴影模糊半径。 取值范围：[0, +∞)，API版本26.0.0开始取值范围变更为(-∞, +∞) 单位：px **说明：** API版本26.0.0之前，设置小于0的值时，按值为0处理。从API版本26.0.0开始，设置的值即为最终取值，当设置负数值时阴影消失。 如需使用vp单位的数值可用[vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)进行转换。 如果radius为Resource类型，则传入的值需为number类型。

**Type:** number | Resource

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

