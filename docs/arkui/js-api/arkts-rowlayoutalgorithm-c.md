# RowLayoutAlgorithm

水平方向线性布局算法类。 > **说明：** > > RowLayoutAlgorithm类对象可以赋值给LayoutAlgorithm类型变量，作为[DynamicLayout]@ohos.arkui.components.ArkDynamicLayout组件的入参 > 指定布局算法。

**Inheritance:** RowLayoutAlgorithmimplements: LayoutAlgorithm.

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(option?: RowLayoutAlgorithmOptions)
```

水平方向线性布局算法类的构造函数。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | RowLayoutAlgorithmOptions | No |  |

## alignItems

```TypeScript
@Trace public alignItems?: VerticalAlign
```

所有子组件在垂直方向上的对齐格式。 默认值：VerticalAlign.Center 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** VerticalAlign

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isReverse

```TypeScript
@Trace public isReverse?: boolean
```

子组件在水平方向上的排列是否反转。取值为true表示子组件在水平方向上反转排列，由于水平方向受通用属性[direction]CommonMethod#direction影响，如果 [direction]CommonMethod#direction属性生效，再做一次反转。取值为false表示子组件在水平方向上正序排列。 默认值：false 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## justifyContent

```TypeScript
@Trace public justifyContent?: FlexAlign
```

所有子组件在水平方向上的对齐格式。 默认值：FlexAlign.Start 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** FlexAlign

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## space

```TypeScript
@Trace public space?: LengthMetrics
```

横向布局元素水平方向间距。 默认值：LengthMetrics.vp(0) 非法值：按默认值处理。 装饰器类型：@Trace

**Type:** LengthMetrics

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

