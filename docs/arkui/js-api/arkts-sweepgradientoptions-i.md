# SweepGradientOptions

角度渐变参数。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 > **说明：** > > metricsColors参数的约束： > > [ColorMetrics](arkts-colormetrics-c.md#ColorMetrics)表示填充的颜色，可以使用[colorWithSpace](arkts-colormetrics-c.md#colorWithSpace) > 方法构造指定色域属性的颜色。number表示指定颜色所处的位置，取值范围为[0, 1.0]，0表示需要设置渐变色的容器开始处，1.0表示容器的结束处。为了实现多个颜色渐变效果，多个数组中的number类型参数应递增设置。如果后一个 > 数组中的number类型参数小于前一个数组的number类型参数，将按照等于前一个数组number值处理。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## repeating

```TypeScript
repeating?: boolean
```

Defines gradient colors with repeated coloring. Anonymous Object Rectification.

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## rotation

```TypeScript
rotation?: number | string
```

Defines the rotation angle of the gradient. Anonymous Object Rectification.

**Type:** number | string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## center

```TypeScript
center: [Length, Length]
```

Defines center point for angle gradient. Anonymous Object Rectification.

**Type:** [Length, Length]

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## metricsColors

```TypeScript
metricsColors?: Array<[ColorMetrics, number]>
```

Defines color description in ColorMetrics format for gradients. This parameter takes precedence over colors parameter.

**Type:** Array<[ColorMetrics, number]>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## start

```TypeScript
start?: number | string
```

Defines the starting point of angle gradient. Anonymous Object Rectification.

**Type:** number | string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## end

```TypeScript
end?: number | string
```

Defines end point of angle gradient. Anonymous Object Rectification.

**Type:** number | string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colors

```TypeScript
colors: Array<[ResourceColor, number]>
```

Defines color description for gradients. Anonymous Object Rectification.

**Type:** Array<[ResourceColor, number]>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

