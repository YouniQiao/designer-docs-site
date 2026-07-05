# ArcSwiperAttribute

除支持[通用属性]common外，还支持以下属性。

**Inheritance:** ArcSwiperAttributeextends: CommonMethod<ArcSwiperAttribute>.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSwiperAttribute,ArcSwiper,ArcDirection,ArcSwiperController,ArcDotIndicator } from '@kit.ArkUI';
```

## customContentTransition

```TypeScript
customContentTransition(transition: Optional<SwiperContentAnimatedTransition>): ArcSwiperAttribute
```

自定义ArcSwiper页面切换动画。在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发回调。开发者可以在回调中设置透明度、缩放比例、位移等属性来自定义切换动画。 在页面跟手滑动和离手后执行切换动画的过程中，会对视窗内所有页面逐帧触发[SwiperContentTransitionProxy](arkts-swipercontenttransitionproxy-i.md#SwiperContentTransitionProxy)回调。例如，当视窗内有下标为 0、1的两个页面时，会每帧触发两次index值分别为0和1的回调。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transition | Optional&lt;SwiperContentAnimatedTransition> | Yes | ArcSwiper自定义切换动画相关信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): ArcSwiperAttribute
```

设置旋转表冠的灵敏度。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | Optional&lt;CrownSensitivity> | Yes | 旋转表冠的灵敏度。 默认值：CrownSensitivity.MEDIUM |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## disableSwipe

```TypeScript
disableSwipe(disabled: Optional<boolean>): ArcSwiperAttribute
```

是否禁用组件滑动切换功能。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | Optional&lt;boolean> | Yes | 是否禁用组件滑动切换功能。设置为true禁用，false不禁用。 默认值：false |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## disableTransitionAnimation

```TypeScript
disableTransitionAnimation(disabled: Optional<boolean>): ArcSwiperAttribute
```

是否关闭特殊动效效果。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | Optional&lt;boolean> | Yes | 是否关闭特殊动效效果。 true：关闭特殊动效效果；false：不关闭特殊动效效果。 传入参数非法时，按false处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## duration

```TypeScript
duration(duration: Optional<number>): ArcSwiperAttribute
```

设置子组件切换的动画时长。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | Optional&lt;number> | Yes | 子组件切换的动画时长。 默认值：400 单位：毫秒 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## effectMode

```TypeScript
effectMode(edgeEffect: Optional<EdgeEffect>): ArcSwiperAttribute
```

设置边缘滑动效果。 目前支持的滑动效果参见[EdgeEffect]EdgeEffect的。调用控制器接口时回弹不生效。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edgeEffect | Optional&lt;EdgeEffect> | Yes | 边缘滑动效果。 默认值：EdgeEffect.Spring |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## index

```TypeScript
index(index: Optional<number>): ArcSwiperAttribute
```

设置当前在容器中显示的子组件的索引值。设置小于0或大于等于子组件数量时，按照默认值0处理。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | Optional&lt;number> | Yes | 当前在容器中显示的子组件的索引值。 当index值为undefined时，按取值为0处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## indicator

```TypeScript
indicator(style: Optional<ArcDotIndicator | boolean>): ArcSwiperAttribute
```

设置弧形圆点指示器样式。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;ArcDotIndicator \| boolean> | Yes | 弧形圆点指示器样式。 - ArcDotIndicator：弧形圆点指示器属性及功能。 -  boolean：是否启用弧形圆点指示器。设置为true启用，false不启用。 默认值：true 默认类型：ArcDotIndicator |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## onAnimationEnd

```TypeScript
onAnimationEnd(handler: Optional<AnimationEndHandler>): ArcSwiperAttribute
```

切换动画结束时触发该回调。 当ArcSwiper切换动效结束时触发，包括动画过程中手势中断，通过[SwiperController]SwiperController调用finishAnimation。参数为动画结束后的index值，多列 ArcSwiper时，index为最左侧组件的索引。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;AnimationEndHandler> | Yes | 切换动画结束时触发该回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## onAnimationStart

```TypeScript
onAnimationStart(handler: Optional<AnimationStartHandler>): ArcSwiperAttribute
```

切换动画开始时触发该回调。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;AnimationStartHandler> | Yes | 切换动画开始时的回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## onChange

```TypeScript
onChange(handler: Optional<IndexChangedHandler>): ArcSwiperAttribute
```

当前显示子组件的索引变化时触发该事件，返回值为当前显示子组件的索引值。 ArcSwiper组件结合[LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)使用时，不能在onChange事件里 触发子页面UI的刷新。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;IndexChangedHandler> | Yes | 当前显示元素的索引回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## onGestureSwipe

```TypeScript
onGestureSwipe(handler: Optional<GestureSwipeHandler>): ArcSwiperAttribute
```

在页面跟手滑动过程中，逐帧触发该回调。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;GestureSwipeHandler> | Yes | 在页面跟手滑动过程中，逐帧触发该回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

## vertical

```TypeScript
vertical(isVertical: Optional<boolean>): ArcSwiperAttribute
```

设置是否为纵向滑动。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isVertical | Optional&lt;boolean> | Yes | 是否为纵向滑动。 true: 纵向滑动；false: 横向滑动。 默认值：false |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute |  |

