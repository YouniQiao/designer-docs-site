# page_transition

## page_transition

```TypeScript
page_transition(value: PageTransitionOptions)
```

设置当前页面的自定义入场动效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PageTransitionOptions | Yes | 配置入场动效的参数。 |

## onEnter

```TypeScript
onEnter(event: PageTransitionCallback): PageTransitionEnterInterface
```

逐帧回调，直到入场动画结束，progress从0变化到1。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PageTransitionCallback | Yes | 入场动画的逐帧回调直到入场动画结束，progress从0变化到1。 [since 18] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [CommonTransition](arkts-commontransition-c.md) | 页面转场通用动效。 |

### Interfaces

| Name | Description |
| --- | --- |
| [PageTransitionEnterInterface](arkts-pagetransitionenterinterface-i.md) | 当前页面的自定义入场动效。继承自[CommonTransition]{@link CommonTransition}。 |
| [PageTransitionExitInterface](arkts-pagetransitionexitinterface-i.md) | 当前页面的自定义退场动效。继承自[CommonTransition]{@link CommonTransition}。 |
| [PageTransitionOptions](arkts-pagetransitionoptions-i.md) | 退场/进场动效的参数。 |

### Enums

| Name | Description |
| --- | --- |
| [RouteType](arkts-routetype-e.md) | 页面转场类型。 |
| [SlideEffect](arkts-slideeffect-e.md) | 页面转场时的滑入滑出效果。 |

### Types

| Name | Description |
| --- | --- |
| [PageTransitionCallback](arkts-pagetransitioncallback-t.md) | 页面转场事件回调。 |

### Constants

| Name | Description |
| --- | --- |
| [PageTransitionEnter](arkts-page-transition-con.md#PageTransitionEnter) | Defines PageTransitionEnter Component. |
| [PageTransitionExit](arkts-page-transition-con.md#PageTransitionExit) | Defines PageTransitionExit Component. |

