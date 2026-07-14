# Swiper

The **Swiper** component is able to display child components in a carousel-like manner. > **NOTE** > - The **Swiper** component implements the scrolling carousel effect through the built-in > [PanGesture]{@link gesture} gesture. When the [disableSwipe]{@link SwiperAttribute#disableSwipe} attribute is set > to **true**, the gesture listening is disabled, thereby preventing the scrolling operation. > > - When [NodeContainer]{@link node_container} is reused in the **Swiper** component, recursive updates of parent > component state variables by child nodes are prohibited.

## Swiper

```TypeScript
Swiper(controller?: SwiperController)
```

Creates a **Swiper** component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | SwiperController | No | Controller to bind to the component to manage page switching and preloadspecific child components. |

## Summary

- [ArrowStyle](arkts-arkui-swiper-arrowstyle-i.md)
- [AutoPlayOptions](arkts-arkui-swiper-autoplayoptions-i.md)
- [CachedCountOptions](arkts-arkui-swiper-cachedcountoptions-i.md)
- [IndicatorIconInfo](arkts-arkui-swiper-indicatoriconinfo-i.md)
- [IndicatorStyle](arkts-arkui-swiper-indicatorstyle-i.md)
- [SwiperAnimationEvent](arkts-arkui-swiper-swiperanimationevent-i.md)
- [SwiperAutoFill](arkts-arkui-swiper-swiperautofill-i.md)
- [SwiperContentAnimatedTransition](arkts-arkui-swiper-swipercontentanimatedtransition-i.md)
- [SwiperContentTransitionProxy](arkts-arkui-swiper-swipercontenttransitionproxy-i.md)
- [SwiperContentWillScrollResult](arkts-arkui-swiper-swipercontentwillscrollresult-i.md)
- [ContentDidScrollCallback](arkts-arkui-swiper-contentdidscrollcallback-t.md)
- [ContentWillScrollCallback](arkts-arkui-swiper-contentwillscrollcallback-t.md)
- [OnSwiperAnimationEndCallback](arkts-arkui-swiper-onswiperanimationendcallback-t.md)
- [OnSwiperAnimationStartCallback](arkts-arkui-swiper-onswiperanimationstartcallback-t.md)
- [OnSwiperGestureSwipeCallback](arkts-arkui-swiper-onswipergestureswipecallback-t.md)
- [SwiperAnimationMode](arkts-arkui-swiper-swiperanimationmode-e.md)
- [SwiperDisplayMode](arkts-arkui-swiper-swiperdisplaymode-e.md)
- [SwiperNestedScrollMode](arkts-arkui-swiper-swipernestedscrollmode-e.md)
