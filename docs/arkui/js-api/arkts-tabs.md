# tabs

Defines Tabs Component instance.

## tabs

```TypeScript
tabs(options?: TabsOptions)
```

创建Tabs容器。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TabsOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [TabsAttribute](arkts-tabsattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |
| [TabsController](arkts-tabscontroller-c.md) | Tabs组件的控制器，用于控制Tabs组件进行页签切换。不支持一个TabsController控制多个Tabs组件。 |

### Interfaces

| Name | Description |
| --- | --- |
| [BarGridColumnOptions](arkts-bargridcolumnoptions-i.md) | TabBar栅格化方式设置的对象，包括栅格模式下的column边距和间隔，以及小、中、大屏下，页签占用的columns数量。 |
| [DividerStyle](arkts-dividerstyle-i.md) | 分割线样式对象。 |
| [FloatingTabBarStyle](arkts-floatingtabbarstyle-i.md) | 提供浮动条模式选项的接口。 |
| [FloatingTabBarWidth](arkts-floatingtabbarwidth-i.md) | 提供了一个接口，用于设置不同断点处的tab宽度的浮动栏宽度。 |
| [ScrollableBarModeOptions](arkts-scrollablebarmodeoptions-i.md) | Scrollable模式下的TabBar的布局样式对象。 |
| [TabContentAnimatedTransition](arkts-tabcontentanimatedtransition-i.md) | Tabs自定义切换动画相关信息。 |
| [TabContentTransitionProxy](arkts-tabcontenttransitionproxy-i.md) | Tabs自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画的起始和目标页面信息，同时，也可以通过调用该对象的finishTransition接口通知Tabs组件自定义动画已结束。 |
| [TabsAnimationEvent](arkts-tabsanimationevent-i.md) | Tabs组件动画相关信息集合。 |
| [TabsInterface](arkts-tabsinterface-i.md) | 通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。 > **说明：** > - 该组件从API version 11开始，支持安全区域避让特性，其[expandSafeArea]{@link CommonMethod#expandSafeArea}属性的默认值为expandSafeArea( > [SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])。开发者可通过重写该属性覆盖默认行为。对于API version 11之前的版本，则需配合expandSafeArea属性手动实现安全区域避 > 让。 |
| [TabsOptions](arkts-tabsoptions-i.md) | Tabs组件参数，设置Tabs的页签位置，当前显示页签的索引，Tabs控制器和TabBar的[通用属性]{@link common}。 |

### Enums

| Name | Description |
| --- | --- |
| [AnimationMode](arkts-animationmode-e.md) | 点击[TabBar]{@link TabContentAttribute#tabBar(options: string | Resource | CustomBuilder | TabBarOptions)}页签时切换 TabContent的动画形式枚举。 |
| [BarMode](arkts-barmode-e.md) | TabBar布局模式枚举。 |
| [BarPosition](arkts-barposition-e.md) | Tabs页签位置枚举。 |
| [LayoutStyle](arkts-layoutstyle-e.md) | [Scrollable]{@link TabsAttribute#barMode(value: BarMode, options?: ScrollableBarModeOptions)}模式下不滚动时的页签排布方式枚举。 |
| [TabsCacheMode](arkts-tabscachemode-e.md) | 子组件的缓存模式。 |
| [TabsNestedScrollMode](arkts-tabsnestedscrollmode-e.md) | Tabs组件和父组件的嵌套滚动模式枚举。 |

### Types

| Name | Description |
| --- | --- |
| [CommonModifier](arkts-commonmodifier-t.md) | 作为Tabs组件的参数对象。 |
| [OnTabsAnimationEndCallback](arkts-ontabsanimationendcallback-t.md) | 切换动画结束时触发的回调。 |
| [OnTabsAnimationStartCallback](arkts-ontabsanimationstartcallback-t.md) | 切换动画开始时触发的回调。 |
| [OnTabsContentDidScrollCallback](arkts-ontabscontentdidscrollcallback-t.md) | Tabs滑动时触发的回调。 > **说明：** > - 例如，当前选中的页签索引为0，从第0页切换到第1页的动画过程中，每帧都会对视窗内所有页面触发回调，当视窗内有第0页和第1页两页时，每帧会触发两次回调。其中，第一次回调的selectedIndex为0、index为0、 > position为当前帧第0页相对于动画开始前第0页的移动比例，mainAxisLength为主轴方向上第0页的长度。第二次回调的selectedIndex仍为0、index为1、position为当前帧第1页相对于动画开始前第0 > 页的移动比例，mainAxisLength为主轴方向上第1页的长度。 > > - 若动画曲线为弹簧插值曲线，从第0页切换到第1页的动画过程中，可能会因为离手时的位置和速度，先过滑到第2页，再回弹到第1页，该过程中每帧会对视窗内第1页和第2页触发回调。 |
| [OnTabsContentWillChangeCallback](arkts-ontabscontentwillchangecallback-t.md) | 自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。 |
| [OnTabsGestureSwipeCallback](arkts-ontabsgestureswipecallback-t.md) | 在页面跟手滑动过程中，逐帧触发的回调。 |
| [TabsCustomContentTransitionCallback](arkts-tabscustomcontenttransitioncallback-t.md) | 自定义Tabs页面切换动画开始时触发的回调。 |
| [UIMaterial](arkts-uimaterial-t.md) | 材质 |

### Constants

| Name | Description |
| --- | --- |
| [Tabs](arkts-tabs-con.md#Tabs) | 通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。 > **说明：** > - 该组件从API version 11开始，支持安全区域避让特性，其[expandSafeArea]{@link CommonMethod#expandSafeArea}属性的默认值为expandSafeArea( > [SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM])。开发者可通过重写该属性覆盖默认行为。对于API version 11之前的版本，则需配合expandSafeArea属性手动实现安全区域避 > 让。 ###### 子组件 仅支持子组件[TabContent]{@link tab_content}，以及渲染控制类型 [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)和 [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)，不建议自定义组件作为子组件。并且if/else和ForEach下也仅支持 TabContent作为子组件，不建议自定义组件作为子组件。 > **说明：** > > Tabs子组件设置了通用属性[visibility]{@link CommonMethod#visibility}的值为None，或者设置值为Hidden时，对应子组件不显示，但依然会在视窗内占位。 > > 已经显示的Tabs子组件TabContent后续隐藏时不会被销毁，若需要页面懒加载和释放，可以参考 > [示例13](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#示例13页面懒加载和释放)。 > > Tabs设置[height]{@link CommonMethod#height(value: Length)}为auto时，可根据子组件高度自适应高度大小。设置 > [width]{@link CommonMethod#width(value: Length)}为auto时，可根据子组件宽度自适应宽度大小。 |
| [TabsInstance](arkts-tabs-con.md#TabsInstance) | Defines Tabs Component instance. |

