# PageTransitionExitInterface

当前页面的自定义退场动效。继承自[CommonTransition](arkts-commontransition-c.md#CommonTransition)。

**Inheritance:** PageTransitionExitInterfaceextends: CommonTransition<PageTransitionExitInterface>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(value: PageTransitionOptions): PageTransitionExitInterface
```

设置当前页面的自定义退场动效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PageTransitionOptions | Yes | 配置退场动效的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PageTransitionExitInterface |  |

## onExit

```TypeScript
onExit(event: PageTransitionCallback): PageTransitionExitInterface
```

逐帧回调，直到出场动画结束，progress从0变化到1。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | PageTransitionCallback | Yes | 出场动画的逐帧回调直到出场动画结束，progress从0变化到1。 [since 18] |

**Return value:**

| Type | Description |
| --- | --- |
| PageTransitionExitInterface |  |

