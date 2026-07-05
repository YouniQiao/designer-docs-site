# ArcSwiperAttribute

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following attributes are supported. In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following events are supported.

**Inheritance/Implementation:** ArcSwiperAttribute extends [CommonMethod<ArcSwiperAttribute>](CommonMethod<ArcSwiperAttribute>)

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSwiperAttribute, ArcSwiper, ArcDirection, ArcSwiperController, ArcDotIndicator } from '@ohos.arkui.ArcSwiper';
```

## customContentTransition

```TypeScript
customContentTransition(transition: Optional<SwiperContentAnimatedTransition>): ArcSwiperAttribute
```

Defines a custom page transition animation. During finger-following swipes and post-release transition animations, this triggers a frame-by-frame callback for all pages in the viewport, allowing you to customize animations by modifying properties like opacity, scale, and translation. During finger-following swipes and post-release transition animations, the [SwiperContentTransitionProxy](arkts-arkui-swipercontenttransitionproxy-i.md#swipercontenttransitionproxy) callback is invoked for all pages in the viewport on a frame-by-frame basis. For example, when there are two pages whose subscripts are 0 and 1 in the viewport, two callbacks whose indexes are 0 and 1 are invoked in each frame.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transition | Optional&lt;SwiperContentAnimatedTransition&gt; | Yes | Information about the custom page transitionanimation. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): ArcSwiperAttribute
```

Sets the sensitivity to the digital crown rotation.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | Optional&lt;CrownSensitivity&gt; | Yes | Sensitivity to the digital crown rotation.<br>Default value:**CrownSensitivity.MEDIUM**. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## disableSwipe

```TypeScript
disableSwipe(disabled: Optional<boolean>): ArcSwiperAttribute
```

Sets whether to disable the swipe feature.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | Optional&lt;boolean&gt; | Yes | Whether to disable the swipe feature. The value **true** means to disablethe feature, and **false** means the opposite.<br>Default value: **false** |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## disableTransitionAnimation

```TypeScript
disableTransitionAnimation(disabled: Optional<boolean>): ArcSwiperAttribute
```

Sets whether to disable the transition animation.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | Optional&lt;boolean&gt; | Yes | Whether to disable the transition animation.<br>**true**: Disable theanimation effect. **false**: Do not disable the animation effect.<br>If the input parameter is invalid, thevalue **false** is used. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## duration

```TypeScript
duration(duration: Optional<number>): ArcSwiperAttribute
```

Sets the duration of the animation for child component switching.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| duration | Optional&lt;number&gt; | Yes | Duration of the autoplay for child component switching.<br>Default value:**400**<br>Unit: ms |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## effectMode

```TypeScript
effectMode(edgeEffect: Optional<EdgeEffect>): ArcSwiperAttribute
```

Sets the effect used when the scroll boundary is reached. For details about the supported effects, see [EdgeEffect](../arkts-components/arkts-arkui-edgeeffect-e.md#edgeeffect). The setting does not take effect when configured using the controller API.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edgeEffect | Optional&lt;EdgeEffect&gt; | Yes | Effect used when the component is at one of the edges.<br>Defaultvalue: **EdgeEffect.Spring** |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## index

```TypeScript
index(index: Optional<number>): ArcSwiperAttribute
```

Sets the index of the child component currently displayed in the container. If the value is less than 0 or greater than or equal to the number of child components, the default value **0** is used.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | Optional&lt;number&gt; | Yes | Index of the child component currently displayed in the container.<br>If**index** is set to **undefined**, the value **0** is used. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## indicator

```TypeScript
indicator(style: Optional<ArcDotIndicator | boolean>): ArcSwiperAttribute
```

Sets the style of the arc dot navigation indicator.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;ArcDotIndicator \| boolean&gt; | Yes | Style of the arc dot navigation indicator.<br> -**ArcDotIndicator**: properties and behavior of the arc dot navigation indicator.<br> - **boolean**: whether toenable the arc dot navigation indicator. **true** to enable, **false** otherwise.<br> Default value: **true**&lt;br&gt; Default type: **ArcDotIndicator** |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## onAnimationEnd

```TypeScript
onAnimationEnd(handler: Optional<AnimationEndHandler>): ArcSwiperAttribute
```

Triggered when the page transition animation ends. This event is triggered when the page transition animation of the **ArcSwiper** component ends, whether it is caused by gesture interruption or by calling **finishAnimation** through [SwiperController](../arkts-components/arkts-arkui-swipercontroller-c.md#swipercontroller). The **index** parameter indicates the index after the animation ends. When the **ArcSwiper** component contains multiple columns, the index is of the leftmost element.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;AnimationEndHandler&gt; | Yes | Triggered when the page transition animation ends. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## onAnimationStart

```TypeScript
onAnimationStart(handler: Optional<AnimationStartHandler>): ArcSwiperAttribute
```

Triggered when the page transition animation starts.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;AnimationStartHandler&gt; | Yes | Triggered when the page transition animation starts. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## onChange

```TypeScript
onChange(handler: Optional<IndexChangedHandler>): ArcSwiperAttribute
```

Triggered when the index of the currently displayed child component changes. The return value is the index of the currently displayed child component. When the **ArcSwiper** component is used together with [LazyForEach](../../../../ui/rendering-control/arkts-rendering-control-lazyforeach.md), the subpage UI update cannot be triggered in the **onChange** event.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;IndexChangedHandler&gt; | Yes | Callback for the index of the currently displayed element. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## onGestureSwipe

```TypeScript
onGestureSwipe(handler: Optional<GestureSwipeHandler>): ArcSwiperAttribute
```

Triggered on a frame-by-frame basis when the page is turned by a swipe.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;GestureSwipeHandler&gt; | Yes | Triggered on a frame-by-frame basis when the page is turned by aswipe. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## vertical

```TypeScript
vertical(isVertical: Optional<boolean>): ArcSwiperAttribute
```

Sets whether vertical swiping is used.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isVertical | Optional&lt;boolean&gt; | Yes | Whether vertical swiping is used.<br>The value **true** means verticalswiping, and **false** means horizontal swiping.<br>Default value: **false** |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

