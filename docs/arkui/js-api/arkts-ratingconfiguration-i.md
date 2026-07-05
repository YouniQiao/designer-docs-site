# RatingConfiguration

开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]CommonConfiguration。

**Inheritance:** RatingConfigurationextends: CommonConfiguration<RatingConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## indicator

```TypeScript
indicator: boolean
```

评分条是否作为指示器使用。当值为true时，表示作为指示器；当值为false时，表示不作为指示器。 默认值：false

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stepSize

```TypeScript
stepSize: number
```

评分条的评分步长。 默认值：0.5

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## rating

```TypeScript
rating: number
```

设置并接收评分值。 默认值：0 取值范围： [0, stars] 小于0取0，大于[stars](arkts-ratingattribute-c.md#stars)取最大值stars。 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stars

```TypeScript
stars: number
```

评分条的星级总数。 默认值：5

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## triggerChange

```TypeScript
triggerChange: Callback<number>
```

触发评分数量变化。

**Type:** Callback<number>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

