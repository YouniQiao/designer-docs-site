# SwiperContentAnimatedTransition

Swiper自定义切换动画相关信息。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transition

```TypeScript
transition: Callback<SwiperContentTransitionProxy>
```

自定义切换动画具体内容。

**Type:** Callback<SwiperContentTransitionProxy>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 26.0.0 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timeout

```TypeScript
timeout?: number
```

Swiper自定义切换动画超时时间。从页面执行默认动画（页面滑动）至移出视窗外的第一帧开始计时，如果到达该时间后，开发者仍未调用 [SwiperContentTransitionProxy](arkts-swipercontenttransitionproxy-i.md#SwiperContentTransitionProxy)的finishTransition接口通知Swiper组件此页面的自定义动画已结束，那么组件就会认 为此页面的自定义动画已结束，立即将该页面节点下渲染树。单位ms，默认值为0。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** From API version 26.0.0 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

