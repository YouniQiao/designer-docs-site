# @ohos.arkui.ArcSwiper

## Modules to Import

```TypeScript
import { ArcSwiperAttribute, ArcSwiper, ArcDirection, ArcSwiperController, ArcDotIndicator } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ArcDotIndicator](arkts-arkui-arcdotindicator-c.md) | Describes the properties and behavior of the arc dot navigation indicator. |
| [ArcSwiperAttribute](arkts-arkui-arcswiperattribute-c.md) | In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported. In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported. |
| [ArcSwiperController](arkts-arkui-arcswipercontroller-c.md) | Implements the controller of the **ArcSwiper** component. You can bind this object to the **ArcSwiper** component and use it to control page switching. |

### Interfaces

| Name | Description |
| --- | --- |
| [ArcSwiperInterface](arkts-arkui-arcswiperinterface-i.md) | Provide an interface for ArcSwiper. |
| [SwiperContentAnimatedTransition](arkts-arkui-swipercontentanimatedtransition-i.md) | Provides the information about the custom page transition animation. |
| [SwiperContentTransitionProxy](arkts-arkui-swipercontenttransitionproxy-i.md) | Implements the proxy object returned during the execution of the custom page transition animation of the **ArcSwiper** component. You can use this object to obtain the page information in the custom animation viewport. You can also call the **finishTransition** API of this object to notify the **ArcSwiper** component that the custom animation has finished playing. &gt; **NOTE** &gt; - For example, when the index of the currently selected child component is 0, during a transition animation from &gt; page 0 to page 1, the callback is triggered for all pages within the viewport on every frame. When pages 0 and 1 &gt; are both in the viewport, the callback is triggered twice per frame. The first callback has **selectedIndex** as &gt; **0**, **index** as **0**, **position** as the ratio of how much page 0 has moved relative to its position before &gt; the animation started on the current frame, and **mainAxisLength** as the length of page 0 on the main axis. The &gt; second callback has **selectedIndex** as **0**, **index** as **1**, **position** as the ratio of how much page 1 &gt; has moved relative to page 0 before the animation started on the current frame, and **mainAxisLength** as the &gt; length of page 1 on the main axis. &gt; &gt; - If the animation curve is a spring interpolation curve, during the transition animation from page 0 to page 1, &gt; due to the position and velocity when the user lifts their finger off the screen, animation may overshoot and slide &gt; past to page 2, then bounce back to page 1. Throughout this process, a callback is triggered for pages 1 and 2 &gt; within the viewport on every frame. |

### Enums

| Name | Description |
| --- | --- |
| [ArcDirection](arkts-arkui-arcdirection-e.md) | Declare the direction of arc indicator. |

### Types

| Name | Description |
| --- | --- |
| [AnimationEndHandler](arkts-arkui-animationendhandler-t.md) | Defines the callback triggered when the page transition animation ends. |
| [AnimationStartHandler](arkts-arkui-animationstarthandler-t.md) | Defines the callback triggered when the page transition animation starts. |
| [FinishAnimationHandler](arkts-arkui-finishanimationhandler-t.md) | Defines the callback to notify the application when the animation stops playing. |
| [GestureSwipeHandler](arkts-arkui-gestureswipehandler-t.md) | Defines the callback triggered on a frame-by-frame basis during a swipe-based page turn. |
| [IndexChangedHandler](arkts-arkui-indexchangedhandler-t.md) | Defines the callback to notify the application when the index of the currently displayed element changes. |

