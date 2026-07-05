# rating

Defines Rating Component instance.

## rating

```TypeScript
rating(options?: RatingOptions)
```

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RatingOptions | No | 设置评分组件。 未设置时，则按照RatingOptions中各参数的默认值配置。 [since 7 - 17] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [RatingAttribute](arkts-ratingattribute-c.md) |  |

### Interfaces

| Name | Description |
| --- | --- |
| [RatingConfiguration](arkts-ratingconfiguration-i.md) | 开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]{@link CommonConfiguration}。 |
| [RatingInterface](arkts-ratinginterface-i.md) | 提供在给定范围内选择评分的组件。 > **说明：** > - 当Rating的父节点有指定宽高时，需为Rating组件指定宽高，或为父节点设置值为true的[clip]{@link CommonMethod#clip(clip: Optional<boolean>)}属性。 |
| [RatingOptions](arkts-ratingoptions-i.md) | 评分组件的信息。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [StarStyleOptions](arkts-starstyleoptions-i.md) | 评分组件选中、未选中以及部分选中的星级样式。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 > **说明：** > > string格式可用于加载网络图片和本地图片。当使用相对路径引用本地图片时，例如Image("common/test.jpg")，其中common目录与pages同级，同时支持Base64字符串。 |

### Types

| Name | Description |
| --- | --- |
| [OnRatingChangeCallback](arkts-onratingchangecallback-t.md) | 操作评分条的评星变化时触发该回调。 |

### Constants

| Name | Description |
| --- | --- |
| [Rating](arkts-rating-con.md#Rating) | 提供在给定范围内选择评分的组件。 > **说明：** > - 当Rating的父节点有指定宽高时，需为Rating组件指定宽高，或为父节点设置值为true的[clip]{@link CommonMethod#clip(clip: Optional<boolean>)}属性。 ###### 子组件 无 ###### 键盘走焦规格 | 按键 | 功能描述 | |------------|-----------------------------| | Tab | 组件间切换焦点。 | | 左右方向键 | 评分预览增加/减少（步长为step），不改变实际分值。 | | Home | 移动到第一个星星， 不改变实际分值。 | | End | 移动到最后一个星星， 不改变实际分值。 | | Space/Enter | 根据当前评分提交评分结果。 | |
| [RatingInstance](arkts-rating-con.md#RatingInstance) | Defines Rating Component instance. |

