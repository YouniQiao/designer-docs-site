# Tabs properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** TabsAttribute extends [CommonMethod<TabsAttribute>](CommonMethod<TabsAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## animationCurve

```TypeScript
animationCurve(curve: Curve | ICurve)
```

Sets the tab switching animation curve for the **Tabs** component. For details about commonly used curves, refer to
the [Curve](arkts-arkui-curve-e.md) enum. Custom interpolation curve objects can also be created using the APIs provided in
the [interpolation calculation](../arkts-apis/arkts-curves.md) module.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| curve | Curve \| ICurve | Yes | Tab switching animation curve.<br>Default value:<br>When pages are turned byswiping in **TabContent**, the default value is **interpolatingSpring(-1, 1, 228, 30)**.<br>When pages areturned by tapping tabs or calling the **changeIndex** API of **TabsController**, the default value is**cubicBezierCurve(0.2, 0.0, 0.1, 1.0)**.<br>When a custom animation curve is set, it applies to all tabswitching animations��whether triggered by swiping, tapping a tab, or calling the **changeIndex** API. |

## animationDuration

```TypeScript
animationDuration(value: number)
```

Sets the duration of the tab switching animation for the **Tabs** component.

If **animationCurve** is not set, **animationDuration** only controls the duration of tab switching animations
triggered by tapping a tab or calling the **changeIndex** API, and page-turning animations triggered by swiping in
**TabContent**, the duration is determined by the intrinsic parameters of the default curve
**interpolatingSpring(-1, 1, 228, 30)**.

For details about curves unaffected by **animationDuration**, see
[Interpolation Calculation](../arkts-apis/arkts-curves.md). These curves include curves of type
[springMotion](../arkts-apis/arkts-arkui-springmotion-f.md#springmotion-1),
[responsiveSpringMotion](../arkts-apis/arkts-arkui-responsivespringmotion-f.md#responsivespringmotion-1), and
[interpolatingSpring](../arkts-apis/arkts-arkui-interpolatingspring-f.md#interpolatingspring-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Duration of the tab switching animation.<br>Default value:<br>API version 10 and earlierversions: If this parameter is set to **null** or is not set, the default value **0**, which means no animationfor tab switching. If this parameter is set to **undefined** or a value less than 0, the default value is**300**.<br>API version 11 and later versions: If this parameter is set to an invalid value or is not set, thedefault value is **0** when the tab bar is set to **BottomTabBarStyle** and **300** when the tab bar is set toany other style.<br>Unit: ms<br>Value range: [0, +∞). |

## animationMode

```TypeScript
animationMode(mode: Optional<AnimationMode>)
```

Sets the animation mode for tab switching initiated by clicking a specific tab or by calling the **changeIndex**
API of **TabsController**.

> **NOTE**
>
> This attribute cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | Optional&lt;AnimationMode&gt; | Yes | Animation mode for tab switching initiated by clicking a specific tab orby calling the **changeIndex** API of **TabsController**.<br>Default value: **AnimationMode.CONTENT_FIRST**,which means the target page content is loaded first, followed by the animation. |

## barBackgroundBlurStyle

```TypeScript
barBackgroundBlurStyle(value: BlurStyle)
```

Sets the background blur style of the tab bar.

> **NOTE**
>
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BlurStyle | Yes | Background blur style of the tab bar.<br>Default value: **BlurStyle.NONE** |

## barBackgroundBlurStyle

```TypeScript
barBackgroundBlurStyle(style: BlurStyle, options: BackgroundBlurStyleOptions)
```

Defines the blur style to apply between the background and content of a tab bar. It encapsulates various blur
radius, mask color, mask opacity, saturation, and brightness values through enum values.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | BlurStyle | Yes | Settings of the background blur style, including the blur radius, mask color, maskopacity, saturation, and brightness. |
| options | BackgroundBlurStyleOptions | Yes | Background blur options. |

## barBackgroundColor

```TypeScript
barBackgroundColor(value: ResourceColor)
```

Sets the background color of the tab bar.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Background color of the tab bar.<br>Default value: **Color.Transparent** |

## barBackgroundEffect

```TypeScript
barBackgroundEffect(options: BackgroundEffectOptions)
```

Sets the background effect of the tab bar, including the blur radius, brightness, saturation, and color.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | BackgroundEffectOptions | Yes | Background effect options, including the blur radius, brightness,saturation, and color. |

## barFloatingStyle

```TypeScript
barFloatingStyle(style: Optional<FloatingTabBarStyle>)
```

Enable floating style for bar.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;FloatingTabBarStyle&gt; | Yes | floating style for bar. |

## barGridAlign

```TypeScript
barGridAlign(value: BarGridColumnOptions)
```

Sets the visible area of the tab bar in grid mode. For details, see **BarGridColumnOptions**. This attribute is
effective only in horizontal mode. It is not applicable to
[XS, XL, and XXL devices](../../../../ui/arkts-layout-development-grid-layout.md#breakpoints).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarGridColumnOptions | Yes | Visible area of the tab bar in grid mode. |

## barHeight

```TypeScript
barHeight(value: Length)
```

Sets the height of the tab bar. For horizontal **Tabs** components, you can set the height to **'auto'** to allow
the tab bar to automatically adapt to the height of its child components. If the height is set to a value less than
0 or greater than the height of the **Tabs** component, the default value is used.

In versions earlier than API version 14, setting **barHeight** to a fixed value prevents the tab bar from extending
beyond the bottom safe area. Since API version 14, the [safeAreaPadding](arkts-arkui-commonmethod-c.md#safeareapadding-1)
attribute is supported. When **safeAreaPadding** is set to 0 or is not explicitly set, the tab bar is allowed to
extend beyond the bottom safe area.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Height of the tab bar.<br>Default value:<br>If no style is set or **CustomBuilder** isused to set a custom style for the **TabBar**, and **vertical** is set to **false**, the default value is 56vp.<br>If no style is set or **CustomBuilder** is used to set a custom style for the **TabBar**, and**vertical** is set to **true**, the default value is the height of the **Tabs** component.<br>If[SubTabBarStyle](arkts-arkui-subtabbarstyle-c.md) is set, and the **vertical** attribute is **false**, the default valueis 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is **true**, the default value is theheight of the **Tabs** component.<br>If [BottomTabBarStyle](arkts-arkui-bottomtabbarstyle-c.md) is set, and the**vertical** attribute is **true**, the default value is the height of the **Tabs** component.<br>If**BottomTabBarStyle** is set, and the **vertical** attribute is **false**, the default value is 56 vp inversions earlier than API version 12 and 48 vp since API version 12.<br>**Since:** 8 |

## barHeight

```TypeScript
barHeight(height: Length, noMinHeightLimit: boolean)
```

Sets the height of the tab bar. For horizontal **Tabs** components, you can set the height to **'auto'** to allow
the tab bar to automatically adapt to the height of its child components; you can also set **noMinHeightLimit** to
**true** so that the adaptive height can be less than the default tab bar height. If the height is set to a value
less than 0 or greater than the height of the **Tabs** component, the default value is used.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | Length | Yes | Height of the tab bar.<br>Default value:<br>If no style is set or **CustomBuilder** isused to set a custom style for the **TabBar**, and **vertical** is set to **false**, the default value is 56vp.<br>If no style is set or **CustomBuilder** is used to set a custom style for the **TabBar**, and**vertical** is set to **true**, the default value is the height of the **Tabs** component.<br>If[SubTabBarStyle](arkts-arkui-subtabbarstyle-c.md) is set, and the **vertical** attribute is **false**, the default valueis 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is **true**, the default value is theheight of the **Tabs** component.<br>If [BottomTabBarStyle](arkts-arkui-bottomtabbarstyle-c.md) is set, and the**vertical** attribute is **true**, the default value is the height of the **Tabs** component.<br>If**BottomTabBarStyle** is set, and the **vertical** attribute is **false**, the default value is 48 vp. |
| noMinHeightLimit | boolean | Yes | Whether to remove the minimum height limit of the tab bar when **height** isset to **'auto'**. The default value is **false**.<br>**NOTE**<br>**true**: removes the minimum height limit,allowing the height to be less than the default value.<br>**false**: enforces the minimum height limit, meaningthe height cannot be less than the default value. |

## barMode

```TypeScript
barMode(value: BarMode.Fixed)
```

Sets the tab bar layout mode to **BarMode.Fixed**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarMode.Fixed | Yes | The width of each tab is determined by equally dividing the number of tabs by thebar width (or bar height in the vertical layout). |

## barMode

```TypeScript
barMode(value: BarMode.Scrollable, options: ScrollableBarModeOptions)
```

Sets the tab bar layout mode to **BarMode.Scrollable**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarMode.Scrollable | Yes | The width of each tab is determined by the actual layout. The tabs arescrollable in the following case: In horizontal layout, the total width exceeds the tab bar width; in verticallayout, the total height exceeds the tab bar height. |
| options | ScrollableBarModeOptions | Yes | Layout style of the tab bar in scrollable mode.<br>**NOTE**<br>Thisparameter is effective only when the tab bar is in scrollable mode. |

## barMode

```TypeScript
barMode(value: BarMode, options?: ScrollableBarModeOptions)
```

Sets the tab bar layout mode.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarMode | Yes | Layout mode.<br>Default value: **BarMode.Fixed** |
| options | ScrollableBarModeOptions | No | Layout style of the tab bar in scrollable mode.<br>**NOTE**<br>Thisparameter is effective only when the tab bar is in horizontal scrollable mode.<br>**Since:** 10 |

## barOverlap

```TypeScript
barOverlap(value: boolean)
```

Sets whether the tab bar overlaps the **TabContent** component with a blurred background effect.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the tab bar overlaps the **TabContent** component with a blurred backgroundeffect. **true**: The tab bar overlaps the **TabContent** component with a blurred background effect, and thedefault blur style of the tab bar is set to **'BlurStyle.COMPONENT_THICK'**.<br> **false**: There is no blur oroverlap effect.<br>Default value: **false**. |

## barPosition

```TypeScript
barPosition(value: BarPosition)
```

Sets the position of the **Tabs** component.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BarPosition | Yes | Position of the **Tabs** component.<br>Default value: **BarPosition.Start** |

## barWidth

```TypeScript
barWidth(value: Length)
```

Sets the width of the tab bar. If the set value is less than 0 or greater than the width of the **Tabs** component,
the default value is used.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Width of the tab bar.<br>Default value:<br>If the tab bar has the **vertical** attributeset to **false** and does not have [SubTabBarStyle](arkts-arkui-subtabbarstyle-c.md) or[BottomTabBarStyle](arkts-arkui-bottomtabbarstyle-c.md) specified, the default value is the width of the **Tabs**component.<br>If neither **SubTabBarStyle** nor **BottomTabBarStyle** is set, and the **vertical** attribute is**true**, the default value is 56 vp.<br>If **SubTabBarStyle** is set, and the **vertical** attribute is**false**, the default value is the width of the **Tabs** component.<br>If **SubTabBarStyle** is set, and the**vertical** attribute is **true**, the default value is 56 vp.<br>If **BottomTabBarStyle** is set, and the**vertical** attribute is **true**, the default value is 96 vp.<br>If **BottomTabBarStyle** is set, and the**vertical** attribute is **false**, the default value is the width of the **Tabs** component.<br>**Since:** 8 |

## cachedMaxCount

```TypeScript
cachedMaxCount(count: number, mode: TabsCacheMode)
```

Sets the maximum number of child components to cache and the caching mode. If this attribute is not set, all child
components are cached by default and are not released after being cached.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| count | number | Yes | Maximum number of child components to cache. If the value is out of the range, theunnecessary child components are automatically released.<br>Value range: [0, +∞) |
| mode | TabsCacheMode | Yes | Caching mode for child components.<br>Default value:**TabsCacheMode.CACHE_BOTH_SIDE** |

## customContentTransition

```TypeScript
customContentTransition(delegate: TabsCustomContentTransitionCallback)
```

Defines a custom tab page transition animation.

Instructions:

1. When a custom animation is used, the default transition animation of the **Tabs** component is disabled,
and the tab pages cannot be switched by swipe gestures.
2. Setting this attribute to **undefined** disables the custom transition animation and reverts to the component's
default transition animation.
3. Currently, the custom animation cannot be interrupted.
4. Currently, the custom animation can be triggered only in two scenarios: clicking a tab and
calling the TabsController.changeIndex() API.
5. When a custom animation is used, all events except **onGestureSwipe** of the **Tabs** component are supported.
6. The triggering time of the **onChange** and **onAnimationEnd** events needs to be specified.
If the second custom animation is triggered during the execution of the first custom animation,
the **onChange** and **onAnimationEnd** events of the first custom animation are triggered
when the second custom animation starts.
7. When a custom animation is used, the layout mode of the page involved in the animation is changed to **Stack**.
If the **zIndex** attribute is not set for related pages, the **zIndex** values of all pages are the same.
In this case, the pages are rendered in the order in which they are added to the component tree (that is,
the sequence of page indexes). In light of this, to control the rendering levels of pages, set the **zIndex**
attribute of the pages.
8. This attribute cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

> **NOTE**
>
> This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| delegate | TabsCustomContentTransitionCallback | Yes | Callback invoked when the custom tab transition animationstarts.<br>**Since:** 18 |

## divider

```TypeScript
divider(value: DividerStyle | null)
```

Sets the divider between the **TabBar** and **TabContent** components.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DividerStyle \| null | Yes | Divider style. By default, the divider is not displayed.<br>**DividerStyle**: divider style.<br>**null**: No divider is displayed. |

## edgeEffect

```TypeScript
edgeEffect(edgeEffect: Optional<EdgeEffect>)
```

Sets the edge effect used when the boundary of the scrolling area is reached.

> **NOTE**
>
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 17.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edgeEffect | Optional&lt;EdgeEffect&gt; | Yes | Effect used when the boundary of the scrolling area is reached.<br>Default value: **EdgeEffect.Spring** |

## fadingEdge

```TypeScript
fadingEdge(value: boolean)
```

Sets whether the tabs fade out when they exceed the container width. It is recommended that this attribute be used
together with the **barBackgroundColor** attribute. If **barBackgroundColor** is not defined, the default fade
effect shows a white gradient at the container's edge.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the tabs fade out when they exceed the container width.<br>**true** (default):The tab fades out when they exceed the container width.<br> **false**: The tabs are clipped without any fadeeffect when they exceed the container width. |

## nestedScroll

```TypeScript
nestedScroll(value: TabsNestedScrollMode | undefined)
```

Sets the nested scrolling mode of the **Tabs** component and its parent component. If this API is not called, the
default nested scrolling mode is [SELF_ONLY](arkts-arkui-tabsnestedscrollmode-e.md).

**Model constraint**: This API can be used only in the stage model.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TabsNestedScrollMode \| undefined | Yes | Nested scrolling mode of the **Tabs** component and its parentcontainer.<br>When this parameter is set to **undefined**, the scrolling is contained within the **Tabs**component, and no scroll chaining occurs, that is, the parent component does not scroll when the componentscrolling reaches the boundary. |

## onAnimationEnd

```TypeScript
onAnimationEnd(handler: OnTabsAnimationEndCallback)
```

Triggered when the tab switching animation is completed, including cases where the gesture is interrupted during
animation. This event is not triggered when **animationDuration** is set to **0**, which effectively disables the
animation.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsAnimationEndCallback | Yes | Callback triggered upon animation completion orinterruption.<br>**Since:** 18 |

## onAnimationStart

```TypeScript
onAnimationStart(handler: OnTabsAnimationStartCallback)
```

Triggered when the transition animation starts. If [animationDuration](TabsAttribute#animationDuration) is
set to **0** and [scrollable](TabsAttribute#scrollable) is set to **false**, this callback is not triggered.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsAnimationStartCallback | Yes | Callback triggered when the transition animationstarts.<br>**Since:** 18 |

## onChange

```TypeScript
onChange(event: Callback<number>)
```

Triggered after the active tab changes.

This event is triggered when any of the following occurs:

1. After completing a swipe-triggered tab switching animation.

2. After the active tab changes by calling the [changeIndex](arkts-arkui-tabscontroller-c.md#changeindex-1) API of [Controller](arkts-arkui-tabscontroller-c.md).

3. After the active tab changes by updating the index through the bound [state variable](../../../../ui/state-management/arkts-state.md).

4. After the active tab changes by tapping a tab in the tab bar.

> **NOTE**
>
> When a custom tab is used, relying solely on the **onChange** event for synchronization between tabs and swipe
> gestures may result in delayed visual updates, since it is triggered after the swipe-triggered tab switching
> animation is completed. For smooth animations, listen for the active tab index in
> [onAnimationStart](TabsAttribute#onAnimationStart) and update the tab index accordingly. For details about
> the implementation, see
> [Example 3](../../../../reference/apis-arkui/arkui-ts/ts-container-tabs.md#example-3-implementing-custom-tab-switching-synchronization).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number&gt; | Yes | Index of the active tab. The index starts from 0.<br>**Since:** 18 |

## onContentDidScroll

```TypeScript
onContentDidScroll(handler: OnTabsContentDidScrollCallback | undefined)
```

Triggered when content in the **Tabs** component scrolls.

During page scrolling, the [OnTabsContentDidScrollCallback](arkts-arkui-ontabscontentdidscrollcallback-t.md) callback is
invoked for all pages in the viewport on a frame-by-frame basis. For example, when there are two pages whose
subscripts are 0 and 1 in the viewport, two callbacks whose indexes are 0 and 1 are invoked in each frame.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsContentDidScrollCallback \| undefined | Yes | Callback triggered when a tab page is swiped.Passing **undefined** will unbind the previously registered callback. |

## onContentWillChange

```TypeScript
onContentWillChange(handler: OnTabsContentWillChangeCallback)
```

Triggered when a new page is about to be displayed.

This event is triggered when any of the following occurs:

1. When the user swipes through the **TabContent** to switch to a new page.

2. When **TabsController.changeIndex** is called to switch to a new page.

3. When the **index** attribute is changed to switch to a new page.

4. When the user taps a tab on the tab bar to switch to a new page.

5. When the user presses the left or
right arrow key on the keyboard to switch to a new page while the tab bar has focus.

> **NOTE**
>
> This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsContentWillChangeCallback | Yes | Callback triggered when a new page is about to bedisplayed.<br>**Since:** 18 |

## onGestureSwipe

```TypeScript
onGestureSwipe(handler: OnTabsGestureSwipeCallback)
```

Triggered on a frame-by-frame basis during swipe gestures for tab switching.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnTabsGestureSwipeCallback | Yes | Triggered on a frame-by-frame basis during swipe gestures for tabswitching.<br>**Since:** 18 |

## onSelected

```TypeScript
onSelected(event: Callback<number>)
```

Triggered when the selected element changes. The index of the currently selected element is returned.

This event is triggered when any of the following occurs:

1. When the swipe gesture is released and the tab switching threshold is met, triggering the switching animation.

2. When the [changeIndex](arkts-arkui-tabscontroller-c.md#changeindex-1) API of [TabsController](arkts-arkui-tabscontroller-c.md)
is called, triggering the switching animation.

3. When the index of the active tab is changed through the bound
[state variable](../../../../ui/state-management/arkts-state.md).

4. When a tab is tapped.

> **NOTE**
>
> In the **onSelected** callback, the index of the current displayed page cannot be set using **index** of
> [TabsOptions](arkts-arkui-tabsoptions-i.md), and **TabsController.changeIndex()** cannot be called.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number&gt; | Yes | Index of the currently selected element. |

## onTabBarClick

```TypeScript
onTabBarClick(event: Callback<number>)
```

Triggered when a tab is clicked.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number&gt; | Yes | Index of the clicked tab. The index starts from 0.<br>**Since:** 18 |

## onUnselected

```TypeScript
onUnselected(event: Callback<number>)
```

Triggered when the selected element changes. The index of the element that is about to be hidden is returned.

This event is triggered when any of the following occurs:

1. When the swipe gesture is released and the tab switching threshold is met, triggering the switching animation.

2. When the [changeIndex](arkts-arkui-tabscontroller-c.md#changeindex-1) API of [TabsController](arkts-arkui-tabscontroller-c.md) is called, triggering the switching animation.

3. When the index of the active tab is changed through the bound [state variable](../../../../ui/state-management/arkts-state.md).

4. When a tab is tapped.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;number&gt; | Yes | Index of the element that is about to be hidden. |

## pageFlipMode

```TypeScript
pageFlipMode(mode: Optional<PageFlipMode>)
```

Sets the mode for flipping pages using the mouse wheel.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | Optional&lt;PageFlipMode&gt; | Yes | Mode for flipping pages using the mouse wheel.<br>Default value:**PageFlipMode.CONTINUOUS** |

## scrollable

```TypeScript
scrollable(value: boolean)
```

Sets whether the tabs are scrollable.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the tabs are scrollable.<br>**true** (default): The tabs are scrollable.<br>**false**: The tabs are not scrollable. |

## vertical

```TypeScript
vertical(value: boolean)
```

Sets whether to use vertical tabs.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to use vertical tabs.<br>The value **true** means to use vertical tabs, and**false** means to use horizontal tabs.<br>Default value: **false**<br>If set to have a height of **auto**,horizontal tabs auto-adapt the height to child components, which is calculated as follows: Tab bar height +Divider width + Tab content height + Top and bottom paddings + Top and bottom border widths.<br>If set to havea width of **auto**, vertical tabs auto-adapt the width to child components, which is calculated as follows:Tab bar width + Divider width + Tab content width + Left and right paddings + Left and right border widths.<br>To avoid animation jitter when switching between tabs, maintain a consistent size for child components on eachtab. |

