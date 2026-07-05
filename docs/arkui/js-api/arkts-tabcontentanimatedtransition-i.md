# TabContentAnimatedTransition

Tabs自定义切换动画相关信息。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transition

```TypeScript
transition: Callback<TabContentTransitionProxy>
```

自定义切换动画具体内容。

**Type:** Callback<TabContentTransitionProxy>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timeout

```TypeScript
timeout?: number
```

Tabs自定义切换动画超时时间。从自定义动画开始切换计时，如果到达该时间后，开发者仍未调用[TabContentTransitionProxy](arkts-tabcontenttransitionproxy-i.md#TabContentTransitionProxy)的 finishTransition接口通知Tabs组件自定义动画结束，那么组件就会认为此次自定义动画已结束，直接执行后续操作。 默认值：1000 单位：ms 取值范围：[0, +∞)。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

