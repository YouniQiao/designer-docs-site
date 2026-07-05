# RatingAttribute

**Inheritance:** RatingAttributeextends: CommonMethod<RatingAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<RatingConfiguration>)
```

定制Rating内容区的方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;RatingConfiguration> | Yes | 在Rating组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自定义class实现  ContentModifier接口。 |

## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<RatingConfiguration>>)
```

定制Rating内容区的方法。与 [contentModifier](arkts-ratingattribute-c.md#contentModifier)相比，modifier 参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;RatingConfiguration>> | Yes | 在Rating组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自  定义class实现ContentModifier接口。 当modifier的值为undefined时，不使用内容修改器。 |

## onChange

```TypeScript
onChange(callback: (value: number) => void)
```

当评分条的评星变化时触发该回调。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: number) => void | Yes |  |

## onChange

```TypeScript
onChange(callback: Optional<OnRatingChangeCallback>)
```

当评分条的评星变化时触发该回调。与[onChange](arkts-ratingattribute-c.md#onChange)相比，callback参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnRatingChangeCallback> | Yes | 操作评分条的评星变化时触发该回调。 当callback的值为undefined时，不使用回调函数。 |

## stars

```TypeScript
stars(value: number)
```

设置评分总数。设置为小于等于0的值时，按默认值显示。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 设置评分总数。 默认值：5 |

## stars

```TypeScript
stars(starCount: Optional<number>)
```

设置评分总数。设置为小于等于0的值时，按默认值显示。与[stars](arkts-ratingattribute-c.md#stars)相比，starCount参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| starCount | Optional&lt;number> | Yes | 设置评分总数。 当starCount的值为undefined时，默认值：5 |

## starStyle

```TypeScript
starStyle(options: StarStyleOptions)
```

设置评分的样式。该属性所支持的图片类型能力参考[Image]image组件。 支持加载本地图片和网络图片，暂不支持PixelMap类型。 默认图片加载方式为异步，暂不支持同步加载。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | StarStyleOptions | Yes | 评分的样式。 说明： 当backgroundUri、foregroundUri或secondaryUri设置的图片路径错误时，图  片将保持上次的图片显示结果。如果首次设置错误，则不显示图片。 当backgroundUri或foregroundUri设置为undefined或空字符串时，Rating组件将加载系统默认星型图源。 当  secondaryUri未设置或设置为undefined或空字符串时，将优先使用backgroundUri，效果等同于仅设置foregroundUri和backgroundUri。 [since 18] |

## starStyle

```TypeScript
starStyle(options: Optional<StarStyleOptions>)
```

设置评分的样式。该属性所支持的图片类型能力参考[Image]image组件。 支持加载本地图片和网络图片，暂不支持PixelMap类型。 默认图片加载方式为异步，暂不支持同步加载。 与[starStyle](arkts-ratingattribute-c.md#starStyle)相比，options参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Optional&lt;StarStyleOptions> | Yes | 评分的样式。 说明： 当backgroundUri、foregroundUri或secondaryUri设置  的图片路径错误时，图片将保持上次的图片显示结果。如果首次设置错误，则不显示图片。 当backgroundUri或foregroundUri设置为undefined或空字符串时，Rating组件将加载系统默认星型图  源。 当secondaryUri未设置或设置为undefined或空字符串时，将优先使用backgroundUri，效果等同于仅设置foregroundUri和backgroundUri。 |

## stepSize

```TypeScript
stepSize(value: number)
```

设置操作评级的步长。设置为小于0.1的值时，按默认值显示。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 操作评级的步长。 默认值：0.5 取值范围：[0.1, stars] |

## stepSize

```TypeScript
stepSize(size: Optional<number>)
```

设置操作评级的步长。设置为小于0.1的值时，按默认值显示。与[stepSize](arkts-ratingattribute-c.md#stepSize)相比，size参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Optional&lt;number> | Yes | 操作评级的步长。 当size的值为undefined时，默认值：0.5 取值范围：[0.1, stars] |

