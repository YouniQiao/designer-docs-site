# SwiperDisplayMode

Enumerates the modes in which elements are displayed along the main axis.

**Since:** 7

<!--Device-unnamed-declare enum SwiperDisplayMode--><!--Device-unnamed-declare enum SwiperDisplayMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Stretch

```TypeScript
Stretch
```

The width of each page in the **Swiper** component equals the component's own width.

Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use **STRETCH** instead.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [STRETCH](arkts-arkui-swiperdisplaymode-e.md#stretch)

**Widget capability:** This API can be used in ArkTS widgets since API version 7.

<!--Device-SwiperDisplayMode-Stretch--><!--Device-SwiperDisplayMode-Stretch-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## AutoLinear

```TypeScript
AutoLinear
```

The width of each page in the **Swiper** component equals the maximum width of child components. This enumerated value behaves the same as setting [displayCount](SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean))to **'auto'** (string type). For details, see [displayCount](SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)).

Note: This API is supported since API version 7 and deprecated since API version 10. You are advised to use **AUTO_LINEAR** instead.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [AUTO_LINEAR](arkts-arkui-swiperdisplaymode-e.md#auto_linear)

**Widget capability:** This API can be used in ArkTS widgets since API version 7.

<!--Device-SwiperDisplayMode-AutoLinear--><!--Device-SwiperDisplayMode-AutoLinear-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## STRETCH

```TypeScript
STRETCH
```

The width of each page in the **Swiper** component equals the component's own width.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

<!--Device-SwiperDisplayMode-STRETCH--><!--Device-SwiperDisplayMode-STRETCH-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## AUTO_LINEAR

```TypeScript
AUTO_LINEAR
```

The width of each page in the **Swiper** component equals the width of the leftmost child component in the viewport. This enumerated value behaves the same as setting [displayCount](SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean))to **'auto'** (string type). For details, see [displayCount](SwiperAttribute#displayCount(value: number | string | SwiperAutoFill, swipeByGroup?: boolean)).

Note: This API is supported since API version 10 and deprecated since API version 12. You are advised to use [Scroller.scrollTo](arkts-arkui-scroller-c.md#scrollto-1) instead.

**Since:** 10

**Deprecated since:** 12

**Substitutes:** [scrollTo](arkts-arkui-scroller-c.md#scrollto-1)

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

<!--Device-SwiperDisplayMode-AUTO_LINEAR--><!--Device-SwiperDisplayMode-AUTO_LINEAR-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

