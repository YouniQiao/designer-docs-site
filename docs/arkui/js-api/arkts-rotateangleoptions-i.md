# RotateAngleOptions

指定各轴旋转角的旋转参数选项。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angleX

```TypeScript
angleX?: number | string
```

X轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。 默认值：0 取值范围：(-∞, +∞)

**Type:** number | string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## centerY

```TypeScript
centerY?: number | string
```

变换中心点y轴坐标。表示组件变换中心点（即锚点）的y方向坐标。 单位：vp 默认值：'50%' 取值范围：(-∞, +∞)

**Type:** number | string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angleY

```TypeScript
angleY?: number | string
```

Y轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。 默认值：0 取值范围：(-∞, +∞)

**Type:** number | string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## centerZ

```TypeScript
centerZ?: number
```

z轴锚点，即3D旋转中心点的z轴分量。 默认值：0 单位：px 取值范围：(-∞, +∞)

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angleZ

```TypeScript
angleZ?: number | string
```

Z轴方向上的旋转角。取值为正时相对于旋转轴方向顺时针转动，取值为负时逆时针转动。取值可为string类型，如'90deg'。 默认值：0 取值范围：(-∞, +∞)

**Type:** number | string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## centerX

```TypeScript
centerX?: number | string
```

变换中心点x轴坐标。表示组件变换中心点（即锚点）的x方向坐标。 单位：vp 默认值：'50%' 取值范围：(-∞, +∞)

**Type:** number | string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## perspective

```TypeScript
perspective?: number
```

相机放置的z轴坐标。数值大小表示视距，即相机到z=0平面的距离。取值的正负决定了相机观察的方向。当perspective=0，系统会自动计算适合的相机z轴位置，取值为负数。 旋转轴和旋转中心点都基于[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)设定，组件发生位移时，坐标系不会随之移动。 默认值：0 单位：px 取值范围：(-∞, +∞)

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

