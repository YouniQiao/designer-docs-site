# RatingOptions

评分组件的信息。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## indicator

```TypeScript
indicator?: boolean
```

设置评分组件作为指示器使用，值为true时，不可改变评分。 默认值：false，可进行评分 **说明：** indicator=true时，默认组件高度height=12.0vp，组件width=height * stars。 indicator=false时，默认组件高度height=28.0vp，组件width=height * stars。

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## rating

```TypeScript
rating: number
```

设置并接收评分值。 默认值：0 取值范围： [0, stars] 小于0取0，大于[stars](arkts-ratingattribute-c.md#stars)取最大值stars。 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

