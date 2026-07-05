# SliderAttribute

支持除触摸热区以外的[通用属性]common。 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** SliderAttributeextends: CommonMethod<SliderAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## blockBorderColor

```TypeScript
blockBorderColor(value: ResourceColor)
```

设置滑块描边颜色。 当滑块形状设置为SliderBlockType.DEFAULT时，blockBorderColor可设置默认圆形滑块描边颜色。 当滑块形状设置为SliderBlockType.IMAGE时，滑块无描边，设置blockBorderColor不生效。 当滑块形状设置为SliderBlockType.SHAPE时，blockBorderColor可设置自定义形状中线的颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 滑块描边颜色。 默认值：'#00000000' |

## blockBorderWidth

```TypeScript
blockBorderWidth(value: Length)
```

设置滑块描边粗细。 当滑块形状设置为SliderBlockType.DEFAULT时，blockBorderWidth可设置默认圆形滑块描边粗细。 当滑块形状设置为SliderBlockType.IMAGE时，滑块无描边，设置blockBorderWidth不生效。 当滑块形状设置为SliderBlockType.SHAPE时，blockBorderWidth可设置自定义形状中线的粗细。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 滑块描边粗细。 说明： 设置string类型时，不支持百分比。 |

## blockColor

```TypeScript
blockColor(value: ResourceColor)
```

设置滑块的颜色。 当滑块形状设置为SliderBlockType.DEFAULT时，blockColor可设置默认圆形滑块颜色。 当滑块形状设置为SliderBlockType.IMAGE时，滑块无填充，设置blockColor不生效。 当滑块形状设置为SliderBlockType.SHAPE时，blockColor可设置自定义形状的填充颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 滑块的颜色。 默认值：`$r('sys.color.ohos_id_color_foreground_contrary')` |

## blockColor

```TypeScript
blockColor(value: ResourceColor | LinearGradient)
```

设置Slider滑块的颜色，支持渐变色。 当滑块形状设置为SliderBlockType.DEFAULT时，blockColor可设置默认圆形滑块颜色。 当滑块形状设置为SliderBlockType.IMAGE时，滑块无填充，设置blockColor不生效。 当滑块形状设置为SliderBlockType.SHAPE时，blockColor可设置自定义形状的填充颜色。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor \| LinearGradient | Yes | 滑块的颜色。 默认值：  `$r('sys.color.ohos_id_color_foreground_contrary')` |

## blockSize

```TypeScript
blockSize(value: SizeOptions)
```

设置滑块大小。 当滑块形状设置为SliderBlockType.DEFAULT时，取宽高的最小值作为圆形半径。 当滑块形状设置为SliderBlockType.IMAGE时，用于设置图片的尺寸大小，图片采用ObjectFit.Cover策略进行缩放。 当滑块形状设置为SliderBlockType.SHAPE时，用于设置自定义形状的大小，自定义形状也会采用ObjectFit.Cover策略进行缩放。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SizeOptions | Yes | 滑块大小。 默认值：当参数style的值设置为[SliderStyle](arkts-sliderstyle-e.md#SliderStyle).OutSet时为{width: 18,  height: 18}，当参数style的值设置为[SliderStyle](arkts-sliderstyle-e.md#SliderStyle).InSet时为{width: 12, height: 12}，当参数style的值设置为  [SliderStyle](arkts-sliderstyle-e.md#SliderStyle).NONE时，此字段不生效。 当设置的blockSize的宽高值不相等时，取较小值的尺寸，当设置的宽高值中有一个或两个都小于等于0的时候，取默认  值。 |

## blockStyle

```TypeScript
blockStyle(value: SliderBlockStyle)
```

设置滑块形状参数。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SliderBlockStyle | Yes | 滑块形状参数。 默认值：SliderBlockType.DEFAULT，滑块形状为圆形。 |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<SliderConfiguration>)
```

定制Slider内容区的方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;SliderConfiguration> | Yes | 在Slider组件上，定制内容区的方法。 ContentModifier：内容修改器，开发者需要自定  义class实现ContentModifier接口。 |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>)
```

设置旋转表冠的灵敏度。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | Optional&lt;CrownSensitivity> | Yes | 旋转表冠的灵敏度。 默认值：CrownSensitivity.MEDIUM |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enabled: boolean)
```

设置是否开启触控反馈。 开启触控反馈时，需要在工程的[module.json5](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配置如 下：

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 设置是否开启触控反馈。 true：开启触控反馈；false：不开启触控反馈。 默认值：true |

## maxLabel

```TypeScript
maxLabel(value: string)
```

设置最大值。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用max替代。max是[SliderOptions](arkts-slideroptions-i.md#SliderOptions)中的属性。

**Since:** 7

**Deprecated since:** 9

**Substitute:** max

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 最大值。 |

## minLabel

```TypeScript
minLabel(value: string)
```

设置最小值。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃，建议使用min替代。min是[SliderOptions](arkts-slideroptions-i.md#SliderOptions)中的属性。

**Since:** 7

**Deprecated since:** 9

**Substitute:** min

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 最小值。 |

## minResponsiveDistance

```TypeScript
minResponsiveDistance(value: number)
```

设置滑动响应的最小距离。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 设置滑动响应的最小距离，滑动超过此距离后滑块才开始滑动。 默认值：0 说明： 单位与  [SliderOptions](arkts-slideroptions-i.md#SliderOptions)中的属性min以及属性max一致。 当value小于0、大于max-min或非法值时，取默认值。 |

## onChange

```TypeScript
onChange(callback: (value: number, mode: SliderChangeMode) => void)
```

Slider拖动或点击时触发事件回调。 Begin和End状态当手势点击时都会触发，Moving和Click状态当value值发生变化时触发。 当连贯动作为拖动动作时，不触发Click状态。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: number, mode: SliderChangeMode) => void | Yes |  |

## prefix

```TypeScript
prefix(content: ComponentContent, options?: SliderPrefixOptions)
```

设置滑动条的前缀。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ComponentContent | Yes | 自定义组件内容，用于定义滑块前缀的可视化内容，该内容会显示在滑块的起始位置。 |
| options | SliderPrefixOptions | No |  |

## selectedBorderRadius

```TypeScript
selectedBorderRadius(value: Dimension)
```

设置已滑动部分（高亮）圆角半径。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | 已选择部分的圆角半径。 默认值：当style值为SliderStyle.InSet或SliderStyle.OutSet时，跟随底板圆角；当style值为  SliderStyle.NONE时，为0。 说明： 不支持Percentage类型。设定值小于0时取默认值。 |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

设置滑轨的已滑动部分颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 滑轨的已滑动部分颜色。 默认值：`$r('sys.color.ohos_id_color_emphasize')` |

## selectedColor

```TypeScript
selectedColor(selectedColor: ResourceColor | LinearGradient)
```

设置滑轨的已滑动部分颜色。与[selectedColor](arkts-sliderattribute-c.md#selectedColor)相比，新增了LinearGradient类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectedColor | ResourceColor \| LinearGradient | Yes | 滑轨的已滑动部分颜色。 默认值：  `$r('sys.color.ohos_id_color_emphasize')` 说明： 设置渐变色时，若颜色断点颜色值为非法值或者渐变色断点为空时，渐变色不起效果。 |

## showSteps

```TypeScript
showSteps(value: boolean)
```

设置当前是否显示步长刻度值。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 当前是否显示步长刻度值。 true：显示刻度值；false：不显示刻度值。 默认值：false |

## showSteps

```TypeScript
showSteps(value: boolean, options?: SliderShowStepOptions)
```

设置当前是否显示步长刻度值。 支持设置每个刻度点的无障碍文本信息，不设置时默认使用当前刻度点的值作为无障碍文本信息。 当显示步长时，设置的刻度点无障碍文本信息生效。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 当前是否显示步长刻度值。 true：显示刻度值；false：不显示刻度值。 默认值：false |
| options | SliderShowStepOptions | No |  |

## showTips

```TypeScript
showTips(value: boolean, content?: ResourceStr)
```

设置滑动时是否显示气泡提示。 当direction的值为Axis.Horizontal时，tip显示在滑块上方，如果上方空间不够，则在下方显示。当值为Axis.Vertical时，tip显示在滑块左边，如果左边空间不够，则在右边显示。当不设置周边边距或者周边边 距比较小时，tip会被截断。 tip的绘制区域为Slider自身节点的overlay。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 滑动时是否显示气泡提示。 true：显示气泡；false：不显示气泡。 默认值：false |
| content | ResourceStr | No | 气泡提示的文本内容，默认显示当前百分比。 [since 10] |

## slideRange

```TypeScript
slideRange(value: SlideRange)
```

设置有效滑动区间。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SlideRange | Yes | 设置有效滑动区间 |

## sliderInteractionMode

```TypeScript
sliderInteractionMode(value: SliderInteraction)
```

设置用户与滑动条组件交互方式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SliderInteraction | Yes | 用户与滑动条组件交互方式。 默认值：SliderInteraction.SLIDE_AND_CLICK。 |

## stepColor

```TypeScript
stepColor(value: ResourceColor)
```

设置刻度颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 刻度颜色。 默认值： `$r('sys.color.ohos_id_color_foreground')`混合  `$r('sys.color.ohos_id_alpha_normal_bg')`透明度的颜色 |

## stepSize

```TypeScript
stepSize(value: Length)
```

设置刻度大小（直径）。当值为0时，刻度点不显示，当值小于0时，取默认值。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 刻度大小（直径）。 默认值：'4vp' 取值范围：  [0, [trackThickness](arkts-sliderattribute-c.md#trackThickness)) |

## suffix

```TypeScript
suffix(content: ComponentContent, options?: SliderSuffixOptions)
```

设置滑动条的后缀。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ComponentContent | Yes | 自定义组件内容，用于定义滑块后缀的可视化内容，该内容会显示在滑块的结束位置。 |
| options | SliderSuffixOptions | No |  |

## trackBorderRadius

```TypeScript
trackBorderRadius(value: Length)
```

设置底板圆角半径。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 底板圆角半径。 默认值： style值为SliderStyle.OutSet时默认值为'2vp'。 style值为SliderStyle.InSet时默认  值为'10vp'。 说明： 设定值小于0时取默认值。 |

## trackColor

```TypeScript
trackColor(value: ResourceColor | LinearGradient)
```

设置滑轨的背景颜色。 从API version 12开始支持利用LinearGradient设置滑轨的渐变色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor \| LinearGradient | Yes | 滑轨的背景颜色。 默认值：`$r('sys.color.ohos_id_color_component_normal')`  说明： 1. 设置渐变色时，如果颜色断点颜色值为非法值或渐变色断点为空，渐变色将不起效果。 2. 该接口中的LinearGradient类型不支持在原子化服务中使用。 [since 12] |

## trackColorMetrics

```TypeScript
trackColorMetrics(color: ColorMetricsLinearGradient)
```

设置滑轨轨道的线性渐变背景颜色。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ColorMetricsLinearGradient | Yes | 滑轨轨道的线性渐变背景颜色。 设置渐变色时，如果color的值为undefined，渐变色设置无效，轨道背景颜色默认取值为：  `$r('sys.color.ohos_id_color_component_normal')`。 |

## trackThickness

```TypeScript
trackThickness(value: Length)
```

设置滑轨的粗细。设置小于等于0的值时，取默认值。 为保证滑块和滑轨的[SliderStyle](arkts-sliderstyle-e.md#SliderStyle)样式，[blockSize](arkts-sliderattribute-c.md#blockSize)跟随trackThickness同比例增减。 当style为[SliderStyle](arkts-sliderstyle-e.md#SliderStyle).OutSet时，trackThickness ：[blockSize](arkts-sliderattribute-c.md#blockSize) = 1 ： 4，当style为[SliderStyle](arkts-sliderstyle-e.md#SliderStyle).InSet时，trackThickness ：[blockSize](arkts-sliderattribute-c.md#blockSize) = 5 ： 3。 trackThickness或[blockSize](arkts-sliderattribute-c.md#blockSize)的大小超过Slider组件的宽度或高度时，取默认值。 当[SliderStyle](arkts-sliderstyle-e.md#SliderStyle)设置为OutSet时，尽管trackThickness的大小没超过Slider组件的宽度或高度，但是 [blockSize](arkts-sliderattribute-c.md#blockSize)超过了，取默认值。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 滑轨的粗细。 默认值：当参数style的值设置[SliderStyle](arkts-sliderstyle-e.md#SliderStyle).OutSet 时为 4.0vp，  [SliderStyle](arkts-sliderstyle-e.md#SliderStyle).InSet时为20.0vp。 |

