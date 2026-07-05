# swiper

Defines Swiper Component instance.

## swiper

```TypeScript
swiper(controller?: SwiperController)
```

创建滑块视图容器。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 10开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controller | SwiperController | 否 | 给组件绑定一个控制器，用来控制组件翻页或者预加载指定子节点。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [DigitIndicator](arkts-digitindicator-c.md) | 构造数字指示器的样式，继承自[Indicator]{@link Indicator}。 > **说明：** > 按组翻页时，数字导航点显示的子节点数量不包括占位节点。 > 数字导航点文本最大的字体缩放倍数[maxFontScale]{@link TextAttribute#maxFontScale}为2。 > 页码的镜像显示依据为系统的RTL状态。 |
| [DotIndicator](arkts-dotindicator-c.md) | 构造圆点指示器的样式，继承自[Indicator]{@link Indicator}。 |
| [Indicator](arkts-indicator-c.md) | 设置导航点距离Swiper组件距离。由于导航点有默认交互区域，交互区域高度为32vp，所以无法让显示部分完全贴底。若想实现完全贴底，可以使用 [IndicatorComponent](docroot://reference/apis-arkui/arkui-ts/ts-swiper-components-indicator.md#indicatorcomponent)组件， 更灵活地调整位置。 |
| [SwiperAttribute](arkts-swiperattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： > **说明：** > Swiper组件通用属性[clip]{@link CommonMethod#clip(value: boolean)}的默认值为true。 |
| [SwiperController](arkts-swipercontroller-c.md) | Swiper容器组件的控制器，可以将此对象绑定至Swiper组件，实现控制Swiper翻页等功能。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ArrowStyle](arkts-arrowstyle-i.md) | 左右箭头属性。 |
| [AutoPlayOptions](arkts-autoplayoptions-i.md) | 自动播放属性。 |
| [CachedCountOptions](arkts-cachedcountoptions-i.md) | 预加载子组件的配置选项。 |
| [IndicatorIconInfo](arkts-indicatoriconinfo-i.md) | 为指定的导航点索引设置的图标。 |
| [IndicatorStyle](arkts-indicatorstyle-i.md) | 导航点样式。 > **说明：** > 从API version 8开始支持，从API version 10开始废弃，建议使用[indicator]{@link Indicator}替代。 |
| [SwiperAnimationEvent](arkts-swiperanimationevent-i.md) | Swiper组件动画相关信息集合。 |
| [SwiperAutoFill](arkts-swiperautofill-i.md) | 自适应属性。 |
| [SwiperContentAnimatedTransition](arkts-swipercontentanimatedtransition-i.md) | Swiper自定义切换动画相关信息。 |
| [SwiperContentTransitionProxy](arkts-swipercontenttransitionproxy-i.md) | Swiper自定义切换动画执行过程中，返回给开发者的proxy对象。开发者可通过该对象获取自定义动画视窗内的页面信息，同时，也可以通过调用该对象的finishTransition接口通知Swiper组件页面自定义动画已结束。 |
| [SwiperContentWillScrollResult](arkts-swipercontentwillscrollresult-i.md) | 滑动的相关信息，主要包括：当前页面对应的index、滑动方向上即将显示的页面index和此次滑动的位移。 |
| [SwiperInterface](arkts-swiperinterface-i.md) | 滑块视图容器，提供子组件滑动轮播显示的能力。 > **说明：** > - Swiper组件通过内置的[PanGesture]{@link gesture}拖动手势实现滑动轮播效果，将[disableSwipe]{@link SwiperAttribute#disableSwipe}属性设为true > 时，会禁用该手势监听，从而阻止滑动操作。 > > - Swiper中复用[NodeContainer]{@link node_container}时，禁止递归流程中子节点更新父节点状态变量。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SwiperAnimationMode](arkts-swiperanimationmode-e.md) | Swiper组件翻页至指定页面的动效模式。 |
| [SwiperDisplayMode](arkts-swiperdisplaymode-e.md) | Swiper在主轴上的尺寸大小模式枚举。 |
| [SwiperNestedScrollMode](arkts-swipernestedscrollmode-e.md) | Swiper组件和父组件的嵌套滚动模式枚举。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ContentDidScrollCallback](arkts-contentdidscrollcallback-t.md) | Swiper滑动时触发的回调，参数可参考[SwiperContentTransitionProxy]{@link SwiperContentTransitionProxy}中的说明。 |
| [ContentWillScrollCallback](arkts-contentwillscrollcallback-t.md) | Swiper即将滑动前触发的回调，返回值表示是否允许此次滑动。 |
| [OnSwiperAnimationEndCallback](arkts-onswiperanimationendcallback-t.md) | 切换动画结束时触发的回调。 |
| [OnSwiperAnimationStartCallback](arkts-onswiperanimationstartcallback-t.md) | 切换动画开始时触发的回调。 |
| [OnSwiperGestureSwipeCallback](arkts-onswipergestureswipecallback-t.md) | 在页面跟手滑动过程中，逐帧触发的回调。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Swiper](arkts-swiper-con.md#Swiper) | 滑块视图容器，提供子组件滑动轮播显示的能力。 > **说明：** > - Swiper组件通过内置的[PanGesture]{@link gesture}拖动手势实现滑动轮播效果，将[disableSwipe]{@link SwiperAttribute#disableSwipe}属性设为true > 时，会禁用该手势监听，从而阻止滑动操作。 > > - Swiper中复用[NodeContainer]{@link node_container}时，禁止递归流程中子节点更新父节点状态变量。 ###### 子组件 可以包含子组件。 > **说明：** > > - 子组件类型：系统组件和自定义组件，支持渲染控制类型（[if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)、 > [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)、 > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)和 > [Repeat](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md)）。不建议子组件中混用懒加载组件（包括LazyForEach、Repeat > ）和非懒加载组件，或者子组件中使用多个懒加载组件，否则可能导致懒加载组件预加载能力失效等问题。不建议在组件动画过程中对数据源进行操作，否则会导致布局出现异常。 > > - Swiper子组件的[visibility]{@link CommonMethod#visibility}属性设置为Visibility.None，且Swiper的displayCount属性设置为'auto'时，对应子组件在 > 视窗内不占位，但不影响导航点个数；visibility属性设置为Visibility.None或者Visibility.Hidden时，对应子组件不显示，但依然会在视窗内占位。 > > - 当Swiper子组件设置了[offset]{@link CommonMethod#offset}属性时，会按照子组件的层级进行绘制，层级高的子组件会覆盖层级低的子组件。例如，Swiper包含3个子组件，其中第3个子组件设置了 > offset({ x : 100 })，那么在横向循环滑动中，第3个子组件会覆盖第1个子组件，此时可设置第1个子组件的[zIndex]{@link CommonMethod#zIndex}属性值大于第3个子组件，使第1个子组件层级 > 高于第3个子组件。 > > - 在走焦到用户定义的子节点时，导航点、箭头会由于[焦点样式](docroot://ui/arkts-common-events-focus-event.md#焦点样式)修改zIndex的行为被遮挡。 > > - 在包含大量子组件的场景中，建议采用懒加载、缓存数据、预加载数据和组件复用等方法，以优化Swiper的性能并减少内存占用。最佳实践请参考 > [优化Swiper组件加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-swiper_high_performance_development_guide)。 > |
| [SwiperInstance](arkts-swiper-con.md#SwiperInstance) | Defines Swiper Component instance. |

