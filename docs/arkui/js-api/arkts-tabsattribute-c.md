# TabsAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** TabsAttributeextends: CommonMethod<TabsAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## animationCurve

```TypeScript
animationCurve(curve: Curve | ICurve)
```

设置Tabs翻页动画曲线。常用曲线参考[Curve]Curve，也可以通过[插值计算](arkts-curves.md#curves)模块提供的接口创建自定义的插值曲线对象。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| curve | Curve \| ICurve | Yes | Tabs翻页的动画曲线。 默认值： 滑动TabContent翻页时，默认值为interpolatingSpring(-1, 1, 228, 30  )。 点击TabBar页签和调用TabsController的changeIndex接口翻页时，默认值为cubicBezierCurve(0.2, 0.0, 0.1, 1.0)。 设置自定义动画曲线时，滑动  翻页和点击页签、调用changeIndex翻页都使用设置的动画曲线。 |

## animationDuration

```TypeScript
animationDuration(value: number)
```

设置Tabs翻页动画时长。 animationCurve不设置时，由于滑动TabContent翻页动画曲线interpolatingSpring(-1, 1, 228, 30)时长只受曲线自身参数影响，animationDuration只能控制点击 TabBar页签和调用TabsController的changeIndex接口切换TabContent的动画时长。 不受animationDuration控制的曲线可以查阅[插值计算](arkts-curves.md#curves)模块，比如 [springMotion](arkts-curves-springmotion-f.md#springMotion-1)、 [responsiveSpringMotion](arkts-curves-responsivespringmotion-f.md#responsiveSpringMotion-1)和 [interpolatingSpring](arkts-curves-interpolatingspring-f.md#interpolatingSpring-1)类型的曲线。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Tabs翻页的动画时长。 默认值： API version 10及以前，不设置该属性或设置为null时，默认值为0，即Tabs翻页无动画。设置为小于0或  undefined时，默认值为300。 API version 11及以后，不设置该属性或设置为异常值，且设置TabBar为BottomTabBarStyle样式时，默认值为0。设置TabBar为其他样式时，默认值  为300。 单位：ms 取值范围：[0, +∞) |

## animationMode

```TypeScript
animationMode(mode: Optional<AnimationMode>)
```

设置点击TabBar页签或调用TabsController的changeIndex接口时切换TabContent的动画形式。 > **说明：** > 此属性不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | Optional&lt;AnimationMode> | Yes | 点击TabBar页签或调用TabsController的changeIndex接口时切换TabContent的动画形式。 默认值：  AnimationMode.CONTENT_FIRST，表示在点击TabBar页签或调用TabsController的changeIndex接口切换TabContent时，先加载目标页内容，再开始切换动画。 |

## barBackgroundBlurStyle

```TypeScript
barBackgroundBlurStyle(value: BlurStyle)
```

设置TabBar的背景模糊材质。 > **说明：** > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BlurStyle | Yes | TabBar的背景模糊材质。 默认值：BlurStyle.NONE |

## barBackgroundBlurStyle

```TypeScript
barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions)
```

为TabBar提供一种在背景和内容之间的模糊能力，通过枚举值的方式封装了不同的模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | BlurStyle | Yes | 背景模糊样式。模糊样式中封装了模糊半径、蒙版颜色、蒙版透明度、饱和度、亮度五个参数。 |
| options | BackgroundBlurStyleOptions | Yes | 背景模糊选项。 |

## barBackgroundColor

```TypeScript
barBackgroundColor(value: ResourceColor)
```

设置TabBar的背景颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | TabBar的背景颜色。 默认值：Color.Transparent，透明 |

## barBackgroundEffect

```TypeScript
barBackgroundEffect(options: BackgroundEffectOptions)
```

设置TabBar背景属性，包含背景模糊半径，亮度，饱和度，颜色等参数。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | BackgroundEffectOptions | Yes | 设置TabBar背景属性包括：模糊半径，亮度，饱和度，颜色等。 |

## barFloatingStyle

```TypeScript
barFloatingStyle(style: Optional<FloatingTabBarStyle>)
```

为页签栏启用浮动样式。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;FloatingTabBarStyle> | Yes | 页签栏的浮动样式 |

## barGridAlign

```TypeScript
barGridAlign(value: BarGridColumnOptions)
```

以栅格化方式设置TabBar的可见区域。具体参见BarGridColumnOptions对象。仅水平模式下有效， [不适用于XS、XL和XXL设备](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarGridColumnOptions | Yes | 以栅格化方式设置TabBar的可见区域。 |

## barHeight

```TypeScript
barHeight(value: Length)
```

设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度。height设置为小于0或大于Tabs高度值时，按默认值显示。 API version 14之前的版本，若设置barHeight为固定值后，TabBar无法扩展底部安全区。从API version 14开始支持配合 [safeAreaPadding]CommonMethod#safeAreaPadding属性，当safeAreaPadding不设置bottom或者bottom设置为0时，可以实现扩展安全区。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | TabBar的高度值。 默认值： 未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为false时，默认值为56vp。  未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为true时，默认值为Tabs的高度。 设置  [SubTabBarStyle]SubTabBarStyle样式且vertical属性为false时，默认值为56vp。 设置SubTabBarStyle样式且vertical属性为true时，默认  值为Tabs的高度。 设置[BottomTabBarStyle]BottomTabBarStyle样式且vertical属性为true时，默认值为Tabs的高度。 设置  BottomTabBarStyle样式且vertical属性为false时，默认值为56vp，从API version 12开始，默认值变更为48vp。 [since 8] |

## barHeight

```TypeScript
barHeight(height: Length, noMinHeightLimit: boolean)
```

设置TabBar的高度值。横向Tabs可以设置height为'auto'，让TabBar自适应子组件高度，并通过设置noMinHeightLimit为true让自适应高度可以小于TabBar默认高度。height设置为小于0或大于 Tabs高度值时，按默认值显示。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | Length | Yes | TabBar的高度值。 默认值： 未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为false时，默认值为56  vp。 未设置样式或者通过CustomBuilder设置自定义样式的TabBar且vertical属性为true时，默认值为Tabs的高度。 设置  [SubTabBarStyle]SubTabBarStyle样式且vertical属性为false时，默认值为56vp。 设置SubTabBarStyle样式且vertical属性为true时，默认  值为Tabs的高度。 设置[BottomTabBarStyle]BottomTabBarStyle样式且vertical属性为true时，默认值为Tabs的高度。 设置  BottomTabBarStyle样式且vertical属性为false时，默认值为48vp。 |
| noMinHeightLimit | boolean | Yes | height设置为'auto'时，设置是否取消TabBar的最小高度限制。默认值为false。 说明： 值为true表示取消  TabBar的最小高度限制，即TabBar的高度值可以小于默认值。 值为false表示限制TabBar的最小高度，即TabBar的最小高度值等于默认值。 |

## barMode

```TypeScript
barMode(value: BarMode.Fixed)
```

设置TabBar布局模式为BarMode.Fixed。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarMode.Fixed | Yes | 所有TabBar会平均分配barWidth宽度（纵向时平均分配barHeight高度）。 |

## barMode

```TypeScript
barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions)
```

设置TabBar布局模式为BarMode.Scrollable。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarMode.Scrollable | Yes | 所有TabBar都使用实际布局宽度，超过总宽度（横向Tabs的barWidth，纵向Tabs的barHeight）后可滑动。 |
| options | ScrollableBarModeOptions | Yes |  |

## barMode

```TypeScript
barMode(value: BarMode, options?: ScrollableBarModeOptions)
```

设置TabBar布局模式。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarMode | Yes | 布局模式。 默认值：BarMode.Fixed |
| options | ScrollableBarModeOptions | No |  |

## barOverlap

```TypeScript
barOverlap(value: boolean)
```

设置TabBar是否背后变模糊并叠加在TabContent之上。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | TabBar是否背后变模糊并叠加在TabContent之上。当barOverlap设置为true时，TabBar背后变模糊并叠加在TabContent之上，并且TabBar默认  模糊材质的[BlurStyle]BlurStyle值修改为'BlurStyle.COMPONENT_THICK'。当barOverlap设置为false时，无模糊和叠加效果。 默认值：false |

## barPosition

```TypeScript
barPosition(value: BarPosition)
```

设置Tabs的页签位置。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarPosition | Yes | 设置Tabs的页签位置。 默认值：BarPosition.Start |

## barWidth

```TypeScript
barWidth(value: Length)
```

设置TabBar的宽度值。设置为小于0或大于Tabs宽度值时，按默认值显示。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | TabBar的宽度值。 默认值： 未设置[SubTabBarStyle]SubTabBarStyle和  [BottomTabBarStyle]BottomTabBarStyle的TabBar且vertical属性为false时，默认值为Tabs的宽度。 未设置SubTabBarStyle和  BottomTabBarStyle的TabBar且vertical属性为true时，默认值为56vp。 设置SubTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。 设  置SubTabBarStyle样式且vertical属性为true时，默认值为56vp。 设置BottomTabBarStyle样式且vertical属性为true时，默认值为96vp。 设置  BottomTabBarStyle样式且vertical属性为false时，默认值为Tabs的宽度。 [since 8] |

## cachedMaxCount

```TypeScript
cachedMaxCount(count: number, mode: TabsCacheMode)
```

设置子组件的最大缓存个数及缓存模式。未设置该属性时默认缓存所有子组件且缓存后不会释放。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | number | Yes | 子组件的最大缓存个数。超出范围时自动释放不再需要的子组件。 取值范围：[0, +∞)。 |
| mode | TabsCacheMode | Yes | 子组件的缓存模式。 默认值：TabsCacheMode.CACHE_BOTH_SIDE |

## customContentTransition

```TypeScript
customContentTransition(delegate: TabsCustomContentTransitionCallback)
```

自定义Tabs页面切换动画。 使用说明： 1. 当使用自定义切换动画时，Tabs组件自带的默认切换动画会被禁用，同时，页面也无法跟手滑动。 2. 当设置为undefined时，表示不使用自定义切换动画，仍然使用组件自带的默认切换动画。 3. 当前自定义切换动画不支持打断。 4. 目前自定义切换动画只支持两种场景触发：点击页签和调用TabsController.changeIndex()接口。 5. 当使用自定义切换动画时，Tabs组件支持的事件中，除了onGestureSwipe，其他事件均支持。 6. [onChange](arkts-tabsattribute-c.md#onChange)和[onAnimationEnd](arkts-tabsattribute-c.md#onAnimationEnd)事件的触发时机需要特殊说明：如果在第一次自定义动画执行过程中，触发了第二次自定义动画，那么在开始第二次自定义动画时，就会触发第一次自定义动画的onChange和onAnimationEnd事件。 7. 当使用自定义动画时，参与动画的页面布局方式会改为[Stack]stack布局。如果开发者未主动设置相关页面的[zIndex]CommonMethod#zIndex属性，那么所有页面的zIndex值是一样的，页面的渲染层级会按照在组件树上的顺序（即页面的index值顺序）确定。因此，开发者需要主动修改页面的zIndex属性，来控制页面的渲染层级。 8. 此属性不支持在[attributeModifier]CommonMethod#attributeModifier中调用。 > **说明：** > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delegate | TabsCustomContentTransitionCallback | Yes | 自定义Tabs页面切换动画开始时触发的回调。 [since 18] |

## divider

```TypeScript
divider(value: DividerStyle | null)
```

设置区分TabBar和TabContent的分割线样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DividerStyle \| null | Yes | 分割线样式，默认不显示分割线。 DividerStyle：分割线的样式； null：不显示分割线。 |

## edgeEffect

```TypeScript
edgeEffect(edgeEffect: Optional<EdgeEffect>)
```

设置边缘滑动效果。 > **说明：** > 从API version 17开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edgeEffect | Optional&lt;EdgeEffect> | Yes | 边缘滑动效果。 默认值：EdgeEffect.Spring |

## fadingEdge

```TypeScript
fadingEdge(value: boolean)
```

设置页签超过容器宽度时是否渐隐消失。建议配合[barBackgroundColor](arkts-tabsattribute-c.md#barBackgroundColor)属性一起使用，如果barBackgroundColor属性没有定 义，会默认显示页签末端为白色的渐隐效果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 页签超过容器宽度时是否渐隐消失。 默认值：true，页签超过容器宽度时会渐隐消失。设置为false时，页签超过容器宽度直接截断显示，不产生任何渐变效果?。 |

## nestedScroll

```TypeScript
nestedScroll(value: TabsNestedScrollMode | undefined)
```

设置Tabs组件与其父组件的嵌套滚动模式。未通过该接口设置时，默认嵌套滚动模式为[SELF_ONLY](arkts-tabsnestedscrollmode-e.md#TabsNestedScrollMode)。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TabsNestedScrollMode \| undefined | Yes | Tabs组件和父组件的嵌套滚动模式。 设置undefined时，Tabs自身滚动，不与父组件联动。 |

## onAnimationEnd

```TypeScript
onAnimationEnd(handler: OnTabsAnimationEndCallback)
```

切换动画结束时触发该回调，包括动画过程中手势中断。当animationDuration为0时动画关闭，不触发该回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsAnimationEndCallback | Yes | 切换动画结束时触发的回调。 [since 18] |

## onAnimationStart

```TypeScript
onAnimationStart(handler: OnTabsAnimationStartCallback)
```

切换动画开始时触发该回调。当[animationDuration](arkts-tabsattribute-c.md#animationDuration)为0时动画关闭且 [scrollable](arkts-tabsattribute-c.md#scrollable)为false时，不触发该回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsAnimationStartCallback | Yes | 切换动画开始时触发的回调。 [since 18] |

## onChange

```TypeScript
onChange(event: Callback<number>)
```

Tab页签切换后触发的事件。 满足以下任一条件，即可触发该事件： 1、滑动页面进行页面切换时，组件滑动动画结束后触发。 2、通过[控制器](arkts-tabscontroller-c.md#TabsController)调用[changeIndex](arkts-tabscontroller-c.md#changeIndex)接口，Tab页签切换后触发。 3、动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值，Tab页签切换后触发。 4、点击TabBar页签，Tab页签切换后触发。 > **说明：** > 使用自定义页签时，在onChange事件中联动可能会导致滑动页面切换后才执行页签联动，引起自定义页签切换效果延迟。建议在 > [onAnimationStart](arkts-tabsattribute-c.md#onAnimationStart)中监听并刷新当前索引，以确保动效能够及时触发。具体实现可参考 > [示例3](docroot://reference/apis-arkui/arkui-ts/ts-container-tabs.md#示例3自定义页签切换联动)。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number> | Yes | 当前显示的index索引，索引从0开始计算。 [since 18] |

## onContentDidScroll

```TypeScript
onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined)
```

监听Tabs页面滑动事件。 在页面滑动过程中，会对视窗内所有页面逐帧触发[OnTabsContentDidScrollCallback](arkts-ontabscontentdidscrollcallback-t.md#OnTabsContentDidScrollCallback)回调。例如，当视窗内有下标为0、1的两个页面 时，会每帧触发两次index值分别为0和1的回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsContentDidScrollCallback \| undefined | Yes | Tabs滑动时触发的回调，undefined会解绑原有回调。 |

## onContentWillChange

```TypeScript
onContentWillChange(handler: OnTabsContentWillChangeCallback)
```

自定义Tabs页面切换拦截事件能力，新页面即将显示时触发该回调。 满足以下任一条件，即可触发该事件： 1、滑动TabContent切换新页面时触发。 2、通过TabsController.[changeIndex](arkts-tabscontroller-c.md#changeIndex)接口切换新页面时触发。 3、通过动态修改index属性值切换新页面时触发。 4、通过点击TabBar页签切换新页面时触发。 5、TabBar页签获焦后，通过键盘左右方向键等切换新页面时触发。 > **说明：** > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsContentWillChangeCallback | Yes | 自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。 [since 18] |

## onGestureSwipe

```TypeScript
onGestureSwipe(handler: OnTabsGestureSwipeCallback)
```

在页面跟手滑动过程中，逐帧触发该回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsGestureSwipeCallback | Yes | 在页面跟手滑动过程中，逐帧触发的回调。 [since 18] |

## onSelected

```TypeScript
onSelected(event: Callback<number>)
```

当选中元素改变时触发该回调，返回值为当前选中的元素的索引值。 满足以下任一条件，即可触发该事件： 1. 滑动离手时满足翻页阈值，开始切换动画时触发。 2. 通过[TabsController控制器](arkts-tabscontroller-c.md#TabsController)调用[changeIndex](arkts-tabscontroller-c.md#changeIndex)接口，开始切换动画时触发。 3. 动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值后触发。 4. 通过页签处点击触发。 > **说明：** > onSelected回调中不可通过[TabsOptions](arkts-tabsoptions-i.md#TabsOptions)的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number> | Yes | 当前选中元素的索引。 |

## onTabBarClick

```TypeScript
onTabBarClick(event: Callback<number>)
```

Tab页签点击后触发的事件。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number> | Yes | 被点击的index索引，索引从0开始计算。 [since 18] |

## onUnselected

```TypeScript
onUnselected(event: Callback<number>)
```

当选中元素改变时触发该回调，返回值为将要隐藏的元素的索引值。 满足以下任一条件，即可触发该事件： 1. 滑动离手时满足翻页阈值，开始切换动画时触发。 2. 通过[TabsController控制器](arkts-tabscontroller-c.md#TabsController)调用[changeIndex](arkts-tabscontroller-c.md#changeIndex)接口，开始切换动画时触发。 3. 动态修改[状态变量](docroot://ui/state-management/arkts-state.md)构造的index属性值后触发。 4. 通过页签处点击触发。 > **说明：** > onUnselected回调中不可通过TabsOptions的index设置当前显示页的索引，不可调用TabsController.changeIndex()方法。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number> | Yes | 将要隐藏元素的索引。 |

## pageFlipMode

```TypeScript
pageFlipMode(mode: Optional<PageFlipMode>)
```

设置鼠标滚轮翻页模式。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | Optional&lt;PageFlipMode> | Yes | 鼠标滚轮翻页模式。 默认值：PageFlipMode.CONTINUOUS |

## scrollable

```TypeScript
scrollable(value: boolean)
```

设置是否可以通过滑动页面进行页面切换。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否可以通过滑动页面进行页面切换。 默认值：true，可以通过滑动页面进行页面切换。为false时不可滑动切换页面。 |

## vertical

```TypeScript
vertical(value: boolean)
```

设置是否为纵向Tabs。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否为纵向Tabs。 默认值：false，横向Tabs，为true时纵向Tabs。 当横向Tabs设置height为auto时，Tabs组件高度自适应子组件高  度，即为[tabBar]TabContentAttribute#tabBar(options: string \| Resource \| CustomBuilder \| TabBarOptions)高度+  divider线宽+TabContent高度+上下padding值+上下border宽度。 当纵向Tabs设置width为auto时，Tabs组件宽度自适应子组件宽度，即为tabBar宽度+divider线宽+  TabContent宽度+左右padding值+左右border宽度。 尽量保持每一个页面中的子组件尺寸大小一致，避免滑动页面时出现页面切换动画跳动现象。 |

