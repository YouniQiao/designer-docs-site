# NavigationAnimatedTransition

自定义转场动画协议，开发者需实现该协议来定义Navigation路由跳转的跳转动画。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isInteractive

```TypeScript
isInteractive?: boolean
```

本次转场动画是否为可交互转场。 true：本次转场动画是可交互转场；false：本次转场动画不是可交互转场。 默认值：false

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transition

```TypeScript
transition: (transitionProxy: NavigationTransitionProxy) => void
```

自定义转场动画执行回调。 transitionProxy：自定义转场动画代理对象。

**Type:** (transitionProxy: NavigationTransitionProxy) => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timeout

```TypeScript
timeout?: number
```

动画超时结束时间。 单位：ms。 取值范围：[0, +∞)。 默认值：可交互动画无默认值，不可交互动画默认超时时间为1000ms。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTransitionEnd

```TypeScript
onTransitionEnd?: (success: boolean) => void
```

转场完成回调。 success：转场是否成功。

**Type:** (success: boolean) => void

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

