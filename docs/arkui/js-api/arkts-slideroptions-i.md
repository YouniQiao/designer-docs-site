# SliderOptions

滑动条的信息。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## min

```TypeScript
min?: number
```

设置最小值。 默认值：0

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## max

```TypeScript
max?: number
```

设置最大值。 默认值：100 **说明：** min >= max异常情况，min取默认值0，max取默认值100。 value不在[min, max]范围之内，取min或者max，靠近min取min，靠近max取max。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: SliderStyle
```

设置Slider的滑块与滑轨显示样式。 默认值：SliderStyle.OutSet

**Type:** SliderStyle

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## step

```TypeScript
step?: number
```

设置Slider滑动步长。 默认值：1 取值范围：[0.01, max - min] **说明：** 若设置的step值小于0或大于max值，则按默认值显示。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reverse

```TypeScript
reverse?: boolean
```

设置滑动条取值范围是否反向。 true：横向Slider从右往左滑动，竖向Slider从下往上滑动；false：横向Slider从左往右滑动，竖向Slider从上往下滑动。 默认值：false

**Type:** boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: number
```

当前进度值。 默认值：与属性min的取值一致。 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。 取值范围： [min, max] 小于min时取min，大于max时取max。 $$运算符为系统组件提供TS变量的引用，使得TS变量和slider组件的value值保持同步。详细使用示例请参考 [示例7（设置滑动条的双向绑定）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#示例7设置滑动条的双向绑定)。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: Axis
```

设置滑动条滑动方向为水平或竖直方向。 默认值：Axis.Horizontal

**Type:** Axis

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

