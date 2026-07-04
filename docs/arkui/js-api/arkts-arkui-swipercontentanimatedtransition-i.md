# SwiperContentAnimatedTransition

Provides the information about the custom page transition animation.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSwiperAttribute, ArcSwiper, ArcDirection, ArcSwiperController, ArcDotIndicator } from '@ohos.arkui.ArcSwiper';
```

## timeout

```TypeScript
timeout?: number
```

Timeout for the custom page transition animation. The timeout timer starts when the default animation (page scrolling) reaches the point where the first frame is moved out of the viewport. If you do not call the [finishTransition](arkts-arkui-swipercontenttransitionproxy-i.md#finishtransition-1) API of [SwiperContentTransitionProxy](arkts-arkui-swipercontenttransitionproxy-i.md#swipercontenttransitionproxy) before the timer expires, the component considers that the custom animation of the page ends and immediately removes the page node from the render tree. The unit is ms. The default value is **0**.

**Type:** number

**Default:** 0 ms

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## transition

```TypeScript
transition: Callback<SwiperContentTransitionProxy>
```

Content of the custom page transition animation.

**Type:** Callback<SwiperContentTransitionProxy>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

