# TabsOptions

Tabs组件参数，设置Tabs的页签位置，当前显示页签的索引，Tabs控制器和TabBar的[通用属性]common。

**Since:** 15

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller?: TabsController
```

设置Tabs控制器。

**Type:** TabsController

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## index

```TypeScript
index?: number
```

设置当前显示页签的索引。 默认值：0 **说明：** 设置为小于0的值时按默认值显示。 可选值为[0, TabContent子节点数量-1]。 直接修改index跳页时，切换动效不生效。 使用TabController的[changeIndex](arkts-tabscontroller-c.md#changeIndex)时，默认生效切换动效，可以设置 [animationDuration](arkts-tabsattribute-c.md#animationDuration)为0关闭动画。 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 Tabs重建、系统资源切换（如系统字体切换、系统深浅色切换）或者组件属性变化时，会跳转到index对应的页面。若需要在上述情况下不跳转，建议使用双向绑定。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## barPosition

```TypeScript
barPosition?: BarPosition
```

设置Tabs的页签位置。 默认值：BarPosition.Start。

**Type:** BarPosition

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## barModifier

```TypeScript
barModifier?: CommonModifier
```

设置TabBar的[通用属性]common。 **说明：** 动态置为undefined时会保持当前状态不变，不会重置各通用属性。 由一个CommonModifier切换为另一个CommonModifier时，重复属性会进行覆盖，非重复属性会同时生效，不会重置前一个CommonModifier的通用属性。 Tabs的[barWidth](arkts-tabsattribute-c.md#barWidth)、[barHeight](arkts-tabsattribute-c.md#barHeight)、 [barBackgroundColor](arkts-tabsattribute-c.md#barBackgroundColor)、 [barBackgroundBlurStyle](arkts-tabsattribute-c.md#barBackgroundBlurStyle) 、[barBackgroundEffect](arkts-tabsattribute-c.md#barBackgroundEffect)属性会覆盖CommonModifier的 [width]CommonMethod#width(value: Length)、[height]CommonMethod#height(value: Length)、 [backgroundColor]CommonMethod#backgroundColor(color: Optional<ResourceColor>)、 [backgroundBlurStyle]CommonMethod#backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions) 、[backgroundEffect]CommonMethod#backgroundEffect(options: Optional<BackgroundEffectOptions>)属性。 [align]CommonMethod#align(value: Alignment)属性仅在 [BarMode.Scrollable](arkts-tabsattribute-c.md#barMode)模式下生 效，且Tabs为横向时还需[nonScrollableLayoutStyle](arkts-scrollablebarmodeoptions-i.md#ScrollableBarModeOptions)未设置或设置为异常值时才能生效。 [TabContent]tab_content组件的 [tabBar]TabContentAttribute#tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | TabBarOptions) 属性为底部页签样式时不支持拖拽功能。

**Type:** CommonModifier

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

